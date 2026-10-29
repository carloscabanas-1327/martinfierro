#!/usr/bin/env python3
"""Auditoría conservadora del corpus generado frente al texto fuente Gutenberg.

No modifica la transcripción ni rellena lagunas. Informes en datos/auditoria/.
"""
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPECS = [('ida', 14765, 1, 395, 13, 2316), ('vuelta', 15066, 396, 1193, 33, 4894)]

def leer(p):
    return p.read_text(encoding='utf-8-sig')

def auditar(parte, libro, inicio, fin, cantos_esperados, versos_esperados):
    original = leer(ROOT / 'fuentes' / f'gutenberg-{libro}-original.txt')
    extraidas = json.loads(leer(ROOT / 'obra' / parte / 'estrofas.json'))
    cantos = json.loads(leer(ROOT / 'obra' / parte / 'cantos.json'))
    datos = json.loads(leer(ROOT / 'datos' / 'versos.json'))
    registros = [v for v in datos if v['parte'] == parte]
    numeros = [e['numero'] for e in extraidas]
    codigos = [v['id'] for v in registros]
    rango = set(range(inicio,fin+1))
    # Identificar números fuente presentados en línea propia o junto al verso.
    coincidencias = []
    for i, linea in enumerate(original.splitlines(), 1):
        m = re.match(r'^\s*(\d{1,4})(?:\s+(.+))?\s*$', linea)
        if not m: continue
        n = int(m.group(1))
        if n in rango:
            coincidencias.append({'numero': n, 'linea_fuente': i, 'en_linea': bool(m.group(2)), 'fragmento': linea.strip()[:130]})
    todos_fuente = set(x['numero'] for x in coincidencias)
    faltan = sorted(rango-set(numeros))
    pistas = {str(n): [x for x in coincidencias if x['numero'] == n][:8] for n in faltan}
    texto_fuente = [x.strip() for x in original.splitlines() if x.strip()]
    # La comparación literal por línea se usa como alerta, no como identidad editorial.
    lineas_fuente = set(texto_fuente)
    no_en_fuente = [v for v in registros if v['texto'] not in lineas_fuente]
    anomalos = [{'numero':e['numero'],'cantidad':len(e['versos'])}
                for e in extraidas if len(e['versos']) not in (4,6,8,10)]
    por_canto = Counter(e['canto'] for e in extraidas)
    resultado = {
      'parte':parte,'libro_gutenberg':libro,
      'referencia_externa':{'cantos':cantos_esperados,'versos':versos_esperados},
      'corpus':{'cantos':len(cantos),'estrofas':len(extraidas),'versos':len(registros)},
      'diferencia_versos':len(registros)-versos_esperados,
      'numeros_estrofa_ausentes':faltan,
      'numeros_estrofa_duplicados':[n for n,c in Counter(numeros).items() if c>1],
      'orden_numeracion_incorrecto':numeros!=sorted(numeros),
      'identificadores_duplicados':[x for x,c in Counter(codigos).items() if c>1],
      'versos_sin_coincidencia_literal_en_fuente':len(no_en_fuente),
      'ejemplos_versos_sin_coincidencia_literal':no_en_fuente[:12],
      'estrofas_de_longitud_inusual':anomalos,
      'pistas_en_original_para_estrofas_ausentes':pistas,
      'distribucion_estrofas_por_canto':dict(sorted(por_canto.items())),
      'numeros_detectables_en_fuente':len(todos_fuente),
      'aprobado':False,
      'nota':'Sin cotejo filológico independiente; faltantes de registros no prueban versos ausentes en fuente.'
    }
    return resultado

def main():
    resultados=[auditar(*s) for s in SPECS]
    destino=ROOT/'datos'/'auditoria'
    destino.mkdir(parents=True,exist_ok=True)
    (destino/'reporte.json').write_text(json.dumps(resultados,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    for r in resultados:
        print(json.dumps({k:r[k] for k in ('parte','referencia_externa','corpus','diferencia_versos','numeros_estrofa_ausentes','numeros_estrofa_duplicados','orden_numeracion_incorrecto','identificadores_duplicados','versos_sin_coincidencia_literal_en_fuente','numeros_detectables_en_fuente')},ensure_ascii=False,indent=2))
        for n,match in r['pistas_en_original_para_estrofas_ausentes'].items():
            print('PISTA_FALTANTE',r['parte'],n,json.dumps(match,ensure_ascii=False))
    print('DICTAMEN: NO CERTIFICADO. Ver reporte JSON en artefacto.')

if __name__=='__main__':main()
