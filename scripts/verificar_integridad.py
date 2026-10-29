#!/usr/bin/env python3
"""Pruebas técnicas reproducibles de integridad de la edición estructurada.
No equivalen a una certificación filológica independiente.
"""
import hashlib
import json
import re
from collections import Counter
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SPECS=[('ida',1,395,13,2316),('vuelta',396,1193,33,4894)]
ENMIENDAS={
    ('ida',295,5):'Si este mundo es un infierno',
    ('vuelta',421,3):'escúchenme cuando canto'
}
def leer(p):
    return json.loads(p.read_text(encoding='utf-8'))
def probar():
    total=[]; resultados=[]
    for parte,primero,ultimo,cantos_cantidad,versos_cantidad in SPECS:
        st=leer(ROOT/'obra'/parte/'estrofas.json')
        ca=leer(ROOT/'obra'/parte/'cantos.json')
        vv=[v for v in leer(ROOT/'datos'/'versos.json') if v['parte']==parte]
        assert [e['numero'] for e in st]==list(range(primero,ultimo+1)),f'Numeración incompleta {parte}'
        assert len(ca)==cantos_cantidad, f'Cantos incompletos {parte}'
        assert [c['numero'] for c in ca]==list(range(1,cantos_cantidad+1))
        assert len(vv)==versos_cantidad, f'Versos incompletos {parte}'
        ids=[v['id'] for v in vv]
        assert len(ids)==len(set(ids)),f'Identificadores repetidos {parte}'
        visto=[]
        for e in st:
            assert 1<=e['canto']<=cantos_cantidad
            for i,v in enumerate(e['versos'],1):
                assert v['id']==f'mf-{parte}-e{e["numero"]:04d}-v{i:02d}'
                assert v['texto'] and v['linea']==i
                visto.append({'parte':parte,'canto':e['canto'],'estrofa':e['numero'],**v})
        assert visto==vv, f'JSON desincronizado {parte}'
        original=(ROOT/'fuentes'/('gutenberg-14765-original.txt' if parte=='ida' else 'gutenberg-15066-original.txt')).read_text(encoding='utf-8-sig')
        lineas_originales=Counter(x.strip() for x in original.splitlines() if x.strip())
        excepciones=[]
        for v in vv:
            k=(parte,v['estrofa'],v['linea'])
            if k in ENMIENDAS:
                assert v['texto']==ENMIENDAS[k]
                excepciones.append({'verso':v['id'],'texto':v['texto']})
            else:
                assert lineas_originales[v['texto']]>0,f'Verso no presente en fuente: {v["id"]}'
                lineas_originales[v['texto']]-=1
        assert len(excepciones)==1
        # Reconstrucción paralela de los bloques de versos desde la fuente.
        # No reutiliza la estructura creada por construir.py.
        lineas=original.splitlines()
        primero_idx=next(i for i,line in enumerate(lineas) if line.strip()==str(primero))
        detectados={}
        ultimo_numero=None
        for i in range(primero_idx,len(lineas)):
            literal=lineas[i].strip()
            if not re.fullmatch(r'\d{1,4}',literal):
                continue
            n=int(literal)
            if parte=='vuelta' and n==538 and ultimo_numero==637:
                n=638
            if not (primero<=n<=ultimo) or n in detectados:
                continue
            bloque=[]
            for linea in lineas[i+1:]:
                if not linea.strip():
                    if bloque: break
                    continue
                bloque.append(linea.strip())
            detectados[n]=bloque
            ultimo_numero=n
            if n==ultimo: break
        assert set(detectados)==set(range(primero,ultimo+1)),f'Stanzas sin origen numérico {parte}'
        for e in st:
            originales=detectados[e['numero']]
            estructurados=[v['texto'] for v in e['versos']
                           if (parte,e['numero'],v['linea']) not in ENMIENDAS]
            if originales!=estructurados:
                print('DIFERENCIA',parte,e['numero'],'ORIGINAL',repr(originales[:20]),'ESTRUCTURADO',repr(estructurados[:20]))
                raise AssertionError(f'Diferencia en bloque fuente/JSON: {parte} {e["numero"]}')
        assert sum(map(len,detectados.values()))==versos_cantidad-1
        # Verificación de archivo de lectura: exactamente todos los versos en orden.
        texto=(ROOT/'obra'/parte/'completo-estructurado.txt').read_text(encoding='utf-8')
        local=[line for line in texto.splitlines() if line and not line.startswith('## CANTO ') and not line.startswith('# ESTROFA ')]
        assert local==[v['texto'] for v in vv],f'Archivo TXT no corresponde a JSON en {parte}'
        hash_versos=hashlib.sha256('\n'.join(v['texto'] for v in vv).encode()).hexdigest()
        resultados.append({'parte':parte,'cantos':len(ca),'estrofas':len(st),'versos':len(vv),'enmiendas_verificadas':excepciones,'sha256_texto_versos':hash_versos,'pruebas_tecnicas':'SUPERADAS'})
        total+=vv
    assert len(total)==7210
    assert len({v['id'] for v in total})==7210
    destino=ROOT/'datos'/'auditoria'/'verificacion-tecnica.json'
    destino.parent.mkdir(parents=True,exist_ok=True)
    destino.write_text(json.dumps({'estado':'INTEGRIDAD_TECNICA_VERIFICADA','certificacion_filologica_independiente':False,'versos_totales':len(total),'partes':resultados},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(resultados,ensure_ascii=False,indent=2))
    print('PRUEBAS TÉCNICAS SUPERADAS: 7210 versos, 46 cantos, 1193 estrofas numeradas.')
if __name__=='__main__':
    probar()
