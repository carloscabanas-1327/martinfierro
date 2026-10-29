#!/usr/bin/env python3
"""Cotejo independiente exploratorio contra edición BCN 2022 (1878/1879).
No confundir coincidencia normalizada con identidad filológica.
"""
import json, re, unicodedata, urllib.request
from pathlib import Path
import fitz
from rapidfuzz import process, fuzz

R=Path(__file__).resolve().parents[1]
URL='https://digitales.bcn.gob.ar/files/textos/publicacion-martin-fierro.pdf'
def normalizar(s):
 s=unicodedata.normalize('NFD',s.lower())
 s=''.join(c for c in s if unicodedata.category(c)!='Mn')
 s=re.sub(r'[^a-z0-9ñ ]',' ',s)
 return ' '.join(s.split())
def main():
 req=urllib.request.Request(URL,headers={'User-Agent':'MARTINFIERRO-ORG-TextualAudit/1.0'})
 with urllib.request.urlopen(req,timeout=70) as r: pdf=r.read()
 documento=fitz.open(stream=pdf,filetype='pdf')
 lineas=[]
 for pagina in documento:
  for linea in pagina.get_text('text').splitlines():
   linea=re.sub(r'^\s*\d{1,5}\s+', '',linea.strip())
   n=normalizar(linea)
   if len(n)>11 and len(n.split())>=3: lineas.append(n)
 lineas=list(dict.fromkeys(lineas))
 resultado={'referencia':URL,'fuente_descripcion':'Biblioteca del Congreso de la Nación, edición 2022; Ida 1878, Vuelta 1879','lineas_edicion_segunda':len(lineas),'paginas':len(documento),'partes':[]}
 for parte in ('ida','vuelta'):
  versos=[v for v in json.loads((R/'datos'/'versos.json').read_text(encoding='utf-8')) if v['parte']==parte]
  exactos=[];altos=[];medios=[];bajos=[]
  for v in versos:
   texto=normalizar(v['texto'])
   if texto in lineas:
    exactos.append(v['id']);continue
   hallazgo=process.extractOne(texto,lineas,scorer=fuzz.ratio,score_cutoff=0)
   score=round(hallazgo[1],1) if hallazgo else 0
   entry={'id':v['id'],'texto':v['texto'],'coincidencia':hallazgo[0] if hallazgo else None,'semejanza':score}
   if score>=90:altos.append(entry)
   elif score>=75:medios.append(entry)
   else:bajos.append(entry)
  resultado['partes'].append({'parte':parte,'versos':len(versos),'exactos_normalizados':len(exactos),'semejanza_90_mas':len(altos),'semejanza_75_90':len(medios),'menos_de_75':len(bajos),'casos_revision':(medios+bajos),'estado':'COTEJO_ASISTIDO_PENDIENTE_REVISION'})
 salida=R/'datos'/'auditoria'/'cotejo-bcn-2022.json'
 salida.parent.mkdir(parents=True,exist_ok=True)
 salida.write_text(json.dumps(resultado,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 for p in resultado['partes']:
  print('COTEJO_BCN',p['parte'],{k:p[k] for k in ('versos','exactos_normalizados','semejanza_90_mas','semejanza_75_90','menos_de_75')})
 print('COTEJO AUTOMÁTICO NO ES CERTIFICACIÓN FILOLÓGICA. Revisar diferencias por edición.')
if __name__=='__main__':main()
