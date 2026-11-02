// Tarjetas de redes tipográficas: una por cada canto del lector y guía de estudio.
// Construidas a partir del corpus y SEO editorial, sin inventar hechos ni usar fotografías.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const seoSrc=await fs.readFile('src/data/seo-cantos-estudiantes.ts','utf8');
const match=seoSrc.match(/export const seoCantos=([\s\S]*?) as const;/);
if(!match)throw new Error('No se encontró la matriz SEO de cantos');
const seo=JSON.parse(match[1]);
const corpus={ida:JSON.parse(await fs.readFile('obra/ida/estrofas.json','utf8')),vuelta:JSON.parse(await fs.readFile('obra/vuelta/estrofas.json','utf8'))};
const out='public/media/og';
await fs.mkdir(out,{recursive:true});
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const clean=s=>String(s).replace(/\s+/g,' ').trim();
function lines(value,max=35,count=3){
 const words=clean(value).split(' '),o=[];let line='';
 for(const word of words){const next=line?line+' '+word:word;if(next.length>max&&line){o.push(line);line=word;}else line=next;}
 if(line)o.push(line);
 return o.slice(0,count);
}
function svg({parte,canto,kind,heading,subtitle}){
 const label=parte==='ida'?'EL GAUCHO MARTÍN FIERRO · 1872':'LA VUELTA DE MARTÍN FIERRO · 1879';
 const pieces=lines(heading,36,3);
 const text=pieces.map((s,i)=>`<text x="92" y="${240+i*76}" font-size="${pieces.length>2?57:65}" fill="#faf6e9" font-family="DejaVu Serif, Georgia, serif" font-weight="bold">${esc(s)}</text>`).join('\n');
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
 <rect width="1200" height="630" fill="#17352b"/>
 <rect x="29" y="29" width="1142" height="572" fill="none" stroke="#bfa26a" stroke-width="2"/>
 <path d="M92 145H1108" stroke="#bfa26a" stroke-width="2"/>
 <text x="92" y="108" font-size="33" letter-spacing="4" fill="#d8bc80" font-family="DejaVu Sans, Arial, sans-serif">MARTINFIERRO.ORG</text>
 <text x="92" y="189" font-size="23" fill="#c9b88a" font-family="DejaVu Sans, Arial, sans-serif">${esc(label)}</text>
 ${text}
 <rect x="92" y="516" width="1016" height="1" fill="#a08e63"/>
 <text x="92" y="560" font-size="25" fill="#ece4d1" font-family="DejaVu Sans, Arial, sans-serif">${kind==='guia'?'GUÍA DE ESTUDIO · CANTO':'LECTURA DEL POEMA · CANTO'} ${canto}</text>
 <text x="1108" y="560" font-size="21" text-anchor="end" fill="#d1b77b" font-family="DejaVu Sans, Arial, sans-serif">JOSÉ HERNÁNDEZ</text>
 </svg>`;
}
if(seo.length!==46)throw new Error('Cobertura inesperada de guías');
let count=0;
for(const row of seo){
 const {parte,canto,titulo}=row;
 const st=corpus[parte].find(x=>x.canto===canto);
 if(!st)throw new Error(`Canto inexistente: ${parte} ${canto}`);
 const verso=st.versos[0]?.texto;
 if(!verso)throw new Error(`Versos no disponibles: ${parte} ${canto}`);
 const guide=clean(titulo.replace(/\s*(?:\| Canto \d+|— La (?:ida|vuelta), canto \d+)\s*$/i,''));
 for(const kind of ['lector','guia']){
  const heading=kind==='lector'?verso:guide;
  const filename=`${kind}-${parte}-${canto}.webp`;
  const target=path.join(out,filename);
  await sharp(Buffer.from(svg({parte,canto,kind,heading}))).resize(1200,630).webp({quality:90,effort:5}).toFile(target);
  const meta=await sharp(target).metadata();
  if(meta.width!==1200||meta.height!==630||meta.format!=='webp')throw new Error('Tarjeta inválida: '+filename);
  count++;
 }
}
if(count!==92)throw new Error('Faltan tarjetas OG: '+count);
console.log(`OG OK: ${count} tarjetas WebP 1200×630 generadas para 46 cantos y 46 guías.`);
