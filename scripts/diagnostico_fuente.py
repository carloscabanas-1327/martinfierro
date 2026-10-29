from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
for parte,num,targets in [('ida',14765,[294,295,296]),('vuelta',15066,[420,421,422,636,637,638,639,640,654,655,656,849,855,856])]:
 s=(root/'fuentes'/f'gutenberg-{num}-original.txt').read_text(encoding='utf-8-sig').splitlines()
 print('PARTE',parte,'TOTAL LINEAS',len(s))
 for n in targets:
  found=[i for i,line in enumerate(s) if line.strip()==str(n)]
  print('ESTROFA',n,'HALLAZGOS',len(found))
  for i in found[:1]:
   print('CONTEXTO',n, '\n'.join(f'{j+1}: {s[j]}' for j in range(max(0,i-2), min(len(s),i+15))))
 print('ENCABEZADOS ROMANOS PRIMEROS')
 print([(i+1,s[i]) for i in range(len(s)) if re.fullmatch(r'\s*[IVXLCDM]{1,9}(?:\s*[.\-]\s*.+)?\s*',s[i])][:40])
