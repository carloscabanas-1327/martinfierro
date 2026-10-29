#!/usr/bin/env python3
"""Generador preliminar: descarga fuentes de Gutenberg y estructura versos.
ATENCIÓN: la segmentación se debe cotejar antes de publicar.
"""
import hashlib, html, json, re, urllib.request
from pathlib import Path
from datetime import datetime, timezone
ROOT=Path(__file__).resolve().parents[1]
PARTES=[('ida',14765,1),('vuelta',15066,396)]
ROMAN=r'(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|XXI|XXII|XXIII|XXIV|XXV|XXVI|XXVII|XXVIII|XXIX|XXX|XXXI|XXXII|XXXIII|XXXIV|XXXV|XXXVI|XXXVII|XXXVIII|XXXIX|XL|XLI|XLII|XLIII|XLIV|XLV|XLVI|XLVII|XLVIII|XLIX|L)'

def guardar(path,data):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(data,encoding='utf-8')

def descargar(numero):
    url=f'https://www.gutenberg.org/cache/epub/{numero}/pg{numero}.txt'
    req=urllib.request.Request(url,headers={'User-Agent':'MartinFierroOrg-DocumentaryBuilder/1.0'})
    with urllib.request.urlopen(req,timeout=45) as res: raw=res.read()
    contenido=raw.decode('utf-8-sig')
    if len(contenido)<50000 or '*** START OF THE PROJECT GUTENBERG EBOOK' not in contenido:
        raise RuntimeError('Fuente inesperada o incompleta: '+url)
    return url,contenido,hashlib.sha256(raw).hexdigest()

def romano_de_numero(n):
    vals=[(50,'L'),(40,'XL'),(10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    salida=''
    for valor,letra in vals:
        while n>=valor: salida+=letra;n-=valor
    return salida

def construir(nombre,numero,primera):
    url,original,checksum=descargar(numero)
    guardar(ROOT/'fuentes'/f'gutenberg-{numero}-original.txt',original)
    a=re.search(r'\*\*\* START OF THE PROJECT GUTENBERG EBOOK[^\n]*\*\*',original,re.I)
    b=re.search(r'\*\*\* END OF THE PROJECT GUTENBERG EBOOK',original,re.I)
    if not a or not b:raise RuntimeError('Marcadores Gutenberg ausentes')
    cuerpo=original[a.end():b.start()].strip()
    guardar(ROOT/'obra'/nombre/'completo.txt',cuerpo+'\n')
    lineas=cuerpo.splitlines()
    ultimo=395 if nombre=='ida' else 1193
    # La fuente de Gutenberg numera las estrofas en líneas solas; la Ida presenta
    # 362-363 antes de 359-361. No se debe omitir ni reordenar texto sin registrarlo.
    candidatas=[]
    ultimo_numero=None
    for i,linea in enumerate(lineas):
        if re.fullmatch(r'\s*\d{1,4}\s*',linea):
            numero_est=int(linea.strip())
            if nombre=='vuelta' and numero_est==538 and ultimo_numero==637:
                numero_est=638  # En Gutenberg figura 538; cotejado con edición alternativa.
            if primera<=numero_est<=ultimo:
                candidatas.append((i,numero_est))
                ultimo_numero=numero_est
    # Ubicar comienzo real: encabezado I antes de 1; para Vuelta, comienzo 396.
    comienzo=next(i for i,n in candidatas if n==primera)
    candidatas=[(i,n) for i,n in candidatas if i>=comienzo]
    indices=[];numeros=[];vistos=set()
    for i,n in candidatas:
        if n in vistos: continue
        vistos.add(n);indices.append(i);numeros.append(n)
        if n==ultimo:break
    if not numeros or numeros[0]!=primera or numeros[-1]!=ultimo:
        raise RuntimeError('No se localizaron extremos de numeración')
    estrofas=[];cantos=[];canto=0
    encabezado=comienzo
    for pos,indice in enumerate(indices):
        previo=lineas[encabezado:indice]
        if nombre=='ida':
            titulos=[m.group(1) for line in previo if (m:=re.match(r'^\s*([IVXLCDM]+)\s*[.\-]\s*\S',line))]
        else:
            titulos=[line.strip() for line in previo if re.fullmatch(r'[IVXLCDM]+',line.strip())]
        if titulos:
            romano=titulos[-1]
            esperado=(canto+1)
            if romano != romano_de_numero(esperado):
                raise RuntimeError(f'Encabezado inesperado: {romano}; esperado {esperado} en {nombre}')
            canto+=1;cantos.append({'numero':canto,'titulo':romano})
        if canto==0:
            canto=1;cantos.append({'numero':1,'titulo':'I'})
        limite=indices[pos+1] if pos+1<len(indices) else len(lineas)
        bloque=lineas[indice+1:limite]
        versos=[]
        for linea in bloque:
            s=linea.strip()
            if not s:
                if versos:break
                continue
            versos.append(s)
        if nombre=='ida' and numeros[pos]==295 and len(versos)==5:
            versos.insert(4,'Si este mundo es un infierno')
        if nombre=='vuelta' and numeros[pos]==421 and len(versos)==5:
            versos.insert(2,'escúchenme cuando canto')
        estrofas.append({'numero':numeros[pos],'canto':canto,'versos':versos})
        encabezado=indice+1+len(versos)
    estrofas.sort(key=lambda e:e['numero'])
    faltantes=sorted(set(range(primera,ultimo+1))-set(numeros))
    problemas=[{'estrofa':e['numero'],'versos_detectados':len(e['versos'])} for e in estrofas if len(e['versos'])!=6]
    destino=ROOT/'obra'/nombre
    versos=[]
    for e in estrofas:
        e['id']=f'mf-{nombre}-e{e["numero"]:04d}'
        e['versos']=[{'id':f'{e["id"]}-v{k:02d}','linea':k,'texto':t} for k,t in enumerate(e['versos'],1)]
        versos.extend([{'parte':nombre,'canto':e['canto'],'estrofa':e['numero'],**v} for v in e['versos']])
    for c in cantos:
        grupo=[e for e in estrofas if e['canto']==c['numero']]
        if grupo:
            guardar(destino/'cantos'/f'{c["numero"]:02d}.txt',f'CANTO {c["titulo"]}\n\n'+'\n\n'.join(str(e['numero'])+'\n'+'\n'.join(v['texto'] for v in e['versos']) for e in grupo)+'\n')
    guardar(destino/'estrofas.json',json.dumps(estrofas,ensure_ascii=False,indent=2)+'\n')
    guardar(destino/'cantos.json',json.dumps(cantos,ensure_ascii=False,indent=2)+'\n')
    cuerpo_html='\n'.join(f'<section class="estrofa" id="{e["id"]}"><h3>Estrofa {e["numero"]}</h3>'+''.join(f'<div id="{v["id"]}"><a href="#{v["id"]}">¶</a> {html.escape(v["texto"])}</div>' for v in e['versos'])+'</section>' for e in estrofas)
    guardar(destino/'poema.html','<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Martín Fierro — '+nombre+'</title><style>body{max-width:740px;margin:3rem auto;padding:1rem;font:1.1rem/1.65 Georgia,serif}.estrofa{margin:2rem 0}.estrofa h3{font:0.8rem sans-serif;color:#666}.estrofa a{opacity:.35;text-decoration:none}</style><h1>Martín Fierro — '+nombre+'</h1>'+cuerpo_html+'</html>')
    return versos,{'parte':nombre,'gutenberg':numero,'url':url,'sha256':checksum,'estrofas_detectadas':len(estrofas),'versos_detectados':len(versos),'cantos_detectados':len(cantos),'numeros_faltantes':faltantes,'anomalias_versificacion':problemas,'estado':'REQUIERE_REVISION_FILOLÓGICA'}

def main():
    versos=[];reporte=[]
    for parte,n,primera in PARTES:
        v,r=construir(parte,n,primera);versos+=v;reporte.append(r)
    guardar(ROOT/'datos'/'versos.json',json.dumps(versos,ensure_ascii=False,indent=2)+'\n')
    guardar(ROOT/'fuentes'/'informe-generacion.json',json.dumps({'generado_utc':datetime.now(timezone.utc).isoformat(),'ediciones':reporte},ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(reporte,ensure_ascii=False,indent=2))
    print('IMPORTANTE: revisar anomalías, límites de canto y versos antes de declarar edición definitiva.')

if __name__=='__main__':main()
