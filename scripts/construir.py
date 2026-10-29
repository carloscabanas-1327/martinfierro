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

def construir(nombre,numero,primera):
    url,original,checksum=descargar(numero)
    guardar(ROOT/'fuentes'/f'gutenberg-{numero}-original.txt',original)
    patron_inicio=re.search(r'\*\*\* START OF THE PROJECT GUTENBERG EBOOK[^\n]*\*\*',original,re.I)
    patron_fin=re.search(r'\*\*\* END OF THE PROJECT GUTENBERG EBOOK',original,re.I)
    if not patron_inicio or not patron_fin: raise RuntimeError('Marcadores Gutenberg ausentes')
    cuerpo=original[patron_inicio.end():patron_fin.start()].strip()
    guardar(ROOT/'obra'/nombre/'completo.txt',cuerpo+'\n')
    lineas=cuerpo.splitlines()
    in_poema=False; canto=0; estrofas=[]; actual=None; cantos=[]
    for idx,linea in enumerate(lineas):
        s=linea.strip()
        if not in_poema:
            if s==str(primera) and any(re.fullmatch(r'I(?:\s*-.*)?',x.strip()) for x in lineas[max(0,idx-6):idx]):
                in_poema=True;canto=1;cantos.append({'numero':1,'titulo':'I'})
            else: continue
        if re.fullmatch(rf'{ROMAN}(?:\s*-\s*[^\d].*)?',s) and not s.isdigit():
            if actual is None or (actual and len(actual['versos'])>=4):
                if actual: estrofas.append(actual);actual=None
                if s!='I':
                    canto+=1;cantos.append({'numero':canto,'titulo':s})
                continue
        if re.fullmatch(r'\d{1,4}',s):
            n=int(s)
            if actual and n==actual['numero']+1:
                estrofas.append(actual);actual=None
            if actual is None and ((not estrofas and n==primera) or (estrofas and n==estrofas[-1]['numero']+1)):
                actual={'numero':n,'canto':canto,'versos':[]}
                continue
        if actual and s:
            actual['versos'].append(s)
    if actual:estrofas.append(actual)
    if not estrofas or estrofas[0]['numero']!=primera: raise RuntimeError('No se detectó el inicio del poema')
    if len(estrofas)<300:raise RuntimeError(f'Demasiado pocas estrofas detectadas: {len(estrofas)}')
    problemas=[{'estrofa':e['numero'],'versos_detectados':len(e['versos'])} for e in estrofas if len(e['versos'])<4 or len(e['versos'])>12]
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
    return versos,{'parte':nombre,'gutenberg':numero,'url':url,'sha256':checksum,'estrofas_detectadas':len(estrofas),'versos_detectados':len(versos),'cantos_detectados':len(cantos),'anomalias_versificacion':problemas,'estado':'REQUIERE_REVISION_FILOLÓGICA' if problemas else 'ESTRUCTURADO_SIN_COTEJO'}

def main():
    versos=[];reporte=[]
    for parte,n,primera in PARTES:
        v,r=construir(parte,n,primera);versos+=v;reporte.append(r)
    guardar(ROOT/'datos'/'versos.json',json.dumps(versos,ensure_ascii=False,indent=2)+'\n')
    guardar(ROOT/'fuentes'/'informe-generacion.json',json.dumps({'generado_utc':datetime.now(timezone.utc).isoformat(),'ediciones':reporte},ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(reporte,ensure_ascii=False,indent=2))
    print('IMPORTANTE: revisar anomalías, límites de canto y versos antes de declarar edición definitiva.')

if __name__=='__main__':main()
