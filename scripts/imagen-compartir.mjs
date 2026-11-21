// Imagen al compartir (og:image, twitter:image, image_src y JSON-LD) = la imagen del artículo.
// Se ejecuta después de astro build. Para cada página toma la primera foto del contenido (<main>)
// que tenga al menos 600 px de ancho (no SVG). Si no tiene, la de la misma página en otro idioma
// (hreflang). Si tampoco, la mejor general:
// la de su parte del poema (la ida / la vuelta) en las guías de cantos, o el gaucho a caballo.
// Cuando una página reciba su foto propia, la toma sola en el próximo build: no hay que tocar nada.
// Para redes genera una copia JPG de 1200×630 (recorte centrado) en /media/compartir/auto/.
import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const origin='https://martinfierro.org';
const GENERAL='/media/compartir/gaucho-a-caballo-1200x630.jpg';
const IDA='/media/fotografias-v3/la-ida.webp';
const VUELTA='/media/fotografias-v3/la-vuelta.webp';
let sharp=null;
try{sharp=(await import('sharp')).default;}catch{console.warn('Imagen al compartir: sin sharp, se usa la imagen original (sin copia JPG).');}
async function walk(dir){
 const out=[];
 for(const e of await readdir(dir,{withFileTypes:true})){
  const full=path.join(dir,e.name);
  if(e.isDirectory())out.push(...await walk(full));
  else if(e.name==='index.html')out.push(full);
 }
 return out;
}
const existe=async f=>{try{await access(f);return true;}catch{return false;}};
const decodificar=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const attr=v=>v.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
// Ancho real de cada imagen local (caché por archivo).
const anchos=new Map();
async function ancho(src){
 if(anchos.has(src))return anchos.get(src);
 let w=0;
 const f=path.join(root,decodeURIComponent(src));
 if(sharp&&await existe(f)){try{w=(await sharp(f).metadata()).width||0;}catch{}}
 else if(!sharp)w=9999; // sin sharp no se puede medir: se acepta
 anchos.set(src,w);return w;
}
// Copia 1200×630 en JPG (caché por archivo).
const copias=new Map();
async function copiaCompartir(src){
 if(copias.has(src))return copias.get(src);
 let r={url:origin+src};
 if(sharp){
  const nombre=path.basename(src).replace(/\.[^.]+$/,'')+'-1200x630.jpg';
  const destino=path.join(root,'media/compartir/auto',nombre);
  await mkdir(path.dirname(destino),{recursive:true});
  await sharp(path.join(root,decodeURIComponent(src))).resize(1200,630,{fit:'cover',position:'centre'}).jpeg({quality:82,mozjpeg:true}).toFile(destino);
  r={url:origin+'/media/compartir/auto/'+nombre,width:1200,height:630};
 }
 copias.set(src,r);return r;
}
// Primera foto del contenido que sirva para compartir.
async function fotoDelArticulo(html){
 const main=html.split(/<main\b[^>]*>/)[1]?.split('</main>')[0]||'';
 for(const m of main.matchAll(/<img\b[^>]*>/g)){
  const tag=m[0];
  const src=decodificar((tag.match(/\ssrc="([^"]+)"/)||[])[1]||'');
  const alt=decodificar((tag.match(/\salt="([^"]*)"/)||[])[1]||'');
  if(!src||src.startsWith('data:')||/\.svg(\?|$)/i.test(src))continue;
  if(/^https?:\/\//.test(src)){
   // Imagen externa (p. ej. retrato histórico de Wikimedia Commons): se usa tal cual.
   if(/\.(jpe?g|png)(\?|$)/i.test(src))return {src,alt,externa:true};
   continue;
  }
  if(!src.startsWith('/'))continue;
  if(await ancho(src.split('?')[0])>=600)return {src:src.split('?')[0],alt};
 }
 return null;
}
// La mejor general según la página: la parte del poema en las guías de cantos; si no, el gaucho a caballo.
function general(ruta){
 if(/\/(vuelta|volta|retour|ritorno)\/|\/vuelta-canto-\d/.test(ruta))return VUELTA;
 if(/\/(ida|aller|andata)\/|\/students\/canto-\d/.test(ruta))return IDA;
 return null;
}
// Primera pasada: la foto propia de cada página y sus equivalentes en otros idiomas (hreflang).
const paginas=[];
const fotoPorUrl=new Map();
for(const file of await walk(root)){
 const rel=path.relative(root,path.dirname(file)).split(path.sep).join('/');
 const ruta=rel?'/'+rel+'/':'/';
 const html=await readFile(file,'utf8');
 if(!html.includes('og:image'))continue;
 const foto=await fotoDelArticulo(html);
 const equivalentes=[...html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)].map(m=>m[1]);
 if(foto)fotoPorUrl.set(origin+ruta,foto);
 paginas.push({file,ruta,html,foto,equivalentes});
}
let propias=0,traducidas=0,partes=0,generales=0;
for(let {file,ruta,html,foto,equivalentes} of paginas){
 const h1=(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)||[])[1]?.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()||'';
 let alt=foto?.alt||h1;
 if(foto)propias++;
 else{
  // Sin foto propia: la de la misma página en otro idioma (cada foto sirve para todas las ediciones).
  const eq=equivalentes.map(u=>fotoPorUrl.get(u)).find(Boolean);
  if(eq){foto=eq;traducidas++;}
  else{
   const g=general(ruta);
   if(!g){generales++;continue;} // queda el gaucho a caballo que ya pone la plantilla
   foto={src:g};partes++;
  }
 }
 const original=foto.externa?foto.src:origin+foto.src;
 const compartir=foto.externa?{url:foto.src}:await copiaCompartir(foto.src);
 const url=attr(compartir.url);
 html=html
  .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/,`<meta property="og:image" content="${url}"/>`)
  .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/,`<meta name="twitter:image" content="${url}"/>`)
  .replace(/<link rel="image_src" href="[^"]*"\s*\/?>/,`<link rel="image_src" href="${url}"/>`)
  .replace(/<meta property="og:image:alt" content="[^"]*"\s*\/?>/,alt?`<meta property="og:image:alt" content="${attr(alt)}"/>`:'');
 if(compartir.width){
  html=html.replace(/<meta property="og:image:width" content="[^"]*"\s*\/?>/,`<meta property="og:image:width" content="${compartir.width}"/>`)
   .replace(/<meta property="og:image:height" content="[^"]*"\s*\/?>/,`<meta property="og:image:height" content="${compartir.height}"/>`);
 }else{
  html=html.replace(/<meta property="og:image:width" content="[^"]*"\s*\/?>/,'').replace(/<meta property="og:image:height" content="[^"]*"\s*\/?>/,'');
 }
 // Datos estructurados: la foto original grande primero, después la copia 1200×630.
 html=html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,(todo,a,json,b)=>{
  let datos;try{datos=JSON.parse(json);}catch{return todo;}
  const nodo=(datos['@graph']||[]).find(n=>typeof n['@id']==='string'&&n['@id'].endsWith('#pagina'));
  if(!nodo)return todo;
  nodo.image=original===compartir.url?original:[original,compartir.url];
  nodo.primaryImageOfPage={'@type':'ImageObject',url:original};
  return a+JSON.stringify(datos).replace(/</g,'\\u003c')+b;
 });
 await writeFile(file,html,'utf8');
}
console.log(`Imagen al compartir: ${propias} páginas con foto propia, ${traducidas} con la de su versión en otro idioma, ${partes} con la de su parte del poema, ${generales} con la general (${copias.size} copias 1200×630).`);
