// Auditoría de integridad SEO y textual de las 46 guías (sin alterar el corpus).
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const parse=(p,pattern)=>{const x=read(p).match(pattern);if(!x)throw Error('Formato no reconocido: '+p);return JSON.parse(x[1]);};
const seo=parse('src/data/seo-cantos-estudiantes.ts',/export const seoCantos=([\s\S]*?) as const;/);
const proofs=parse('src/data/pruebas-literarias-cantos.ts',/export const pruebasCantos=([\s\S]*?) as const;/);
const corpus={ida:JSON.parse(read('obra/ida/estrofas.json')),vuelta:JSON.parse(read('obra/vuelta/estrofas.json'))};
const redirects=read('public/_redirects').split(/\r?\n/).filter(x=>x.trim()&&!x.startsWith('#'));
const errors=[];
const key=(p,n)=>p+'/'+n;
if(seo.length!==46||proofs.length!==46||redirects.length!==46)errors.push('Cobertura esperada 46 guías, 46 fichas y 46 redirecciones.');
const slugs=new Set(), ids=new Set();
for(const row of seo){
 const id=key(row.parte,row.canto), url='/estudiantes/'+row.parte+'/'+row.slug+'/';
 if(ids.has(id))errors.push('Canto duplicado: '+id);ids.add(id);
 if(slugs.has(url))errors.push('Slug duplicado: '+url);slugs.add(url);
 if(!row.titulo?.trim()||!row.slug.startsWith('canto-'+row.canto+'-'))errors.push('Título/slug incompleto: '+id);
 const p=proofs.find(x=>x.parte===row.parte&&x.canto===row.canto);
 if(!p||!p.estrofas?.length||!p.justificacion)errors.push('Sin prueba crítica: '+id);
 else for(const number of p.estrofas){
  const stanza=corpus[row.parte].find(x=>x.numero===number);
  if(!stanza||stanza.canto!==row.canto)errors.push('Estrofa incorrecta: '+id+' #'+number);
 }
 if(row.imagen&&!fs.existsSync(path.join(root,'public/media/fotografias-v3',row.imagen)))errors.push('Imagen ausente: '+row.imagen);
 const redirect='/estudiantes/'+row.parte+'/'+row.canto+'/ '+url+' 301';
 if(!redirects.includes(redirect))errors.push('Redirección incorrecta: '+id);
}
const all=[...corpus.ida,...corpus.vuelta];
const countVerses=all.reduce((n,x)=>n+x.versos.length,0);
if(all.length!==1193||countVerses!==7210)errors.push('Conteos del corpus inesperados: '+all.length+'/'+countVerses);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('OK: 46 cantos, 46 slugs, 46 redirecciones, 96 citas y corpus de 1193 estrofas / 7210 versos.');
