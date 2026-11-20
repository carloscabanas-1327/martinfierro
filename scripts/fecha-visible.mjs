// Directiva 6 (punto 8): fecha visible debajo del H1 de cada página indexable.
// Usa las mismas fechas del JSON-LD (datePublished/dateModified), así lo visible y lo declarado coinciden.
// «Actualizado» aparece solo si la fecha de cambio es distinta de la de publicación.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const portadas=new Set(['/','/es/','/en/','/it/','/pt/','/fr/','/de/','/ru/','/zh/','/ja/','/404/']);
const textos={
 es:['Publicado','Actualizado'], en:['Published','Updated'], it:['Pubblicato','Aggiornato'],
 pt:['Publicado','Atualizado'], fr:['Publié','Mis à jour'], de:['Veröffentlicht','Aktualisiert'],
 ru:['Опубликовано','Обновлено'], zh:['发布','更新'], ja:['公開','更新'],
};
async function walk(dir){
 const out=[];
 for(const e of await readdir(dir,{withFileTypes:true})){
  const full=path.join(dir,e.name);
  if(e.isDirectory())out.push(...await walk(full));
  else if(e.name==='index.html')out.push(full);
 }
 return out;
}
let puestas=0;
for(const file of await walk(root)){
 const rel=path.relative(root,path.dirname(file)).split(path.sep).join('/');
 const ruta=rel?'/'+rel+'/':'/';
 if(portadas.has(ruta))continue;
 let html=await readFile(file,'utf8');
 if(/<meta\s+name=["']robots["'][^>]*noindex/i.test(html)||html.includes('class="mf-fecha"'))continue;
 const pub=(html.match(/"datePublished":"(\d{4}-\d{2}-\d{2})"/)||[])[1];
 const mod=(html.match(/"dateModified":"(\d{4}-\d{2}-\d{2})"/)||[])[1];
 const fin=html.indexOf('</h1>');
 if(!pub||fin<0)continue;
 const lang=((html.match(/<html[^>]*\slang="([^"]+)"/)||[])[1]||'es').toLowerCase();
 const corto=lang.slice(0,2);
 const [tPub,tMod]=textos[corto]||textos.es;
 const f=new Intl.DateTimeFormat(lang,{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
 const ver=d=>f.format(new Date(d+'T00:00:00Z'));
 const sep=['zh','ja'].includes(corto)?'：':': ';
 let p=`<p class="mf-fecha">${tPub}${sep}<time datetime="${pub}">${ver(pub)}</time>`;
 if(mod&&mod!==pub)p+=` · ${tMod}${sep}<time datetime="${mod}">${ver(mod)}</time>`;
 p+='</p>';
 html=html.slice(0,fin+5)+p+html.slice(fin+5);
 await writeFile(file,html);
 puestas++;
}
console.log(`Fecha visible en ${puestas} páginas.`);
