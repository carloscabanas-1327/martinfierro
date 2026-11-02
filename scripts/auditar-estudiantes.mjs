// Auditoría de integridad SEO y textual de las 46 guías (sin alterar el corpus).
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const parse=(p,pattern)=>{const x=read(p).match(pattern);if(!x)throw Error('Formato no reconocido: '+p);return JSON.parse(x[1]);};
const seo=parse('src/data/seo-cantos-estudiantes.ts',/export const seoCantos=([\s\S]*?) as const;/);
const proofs=parse('src/data/pruebas-literarias-cantos.ts',/export const pruebasCantos=([\s\S]*?) as const;/);
const vocab=parse('src/data/vocabulario-cantos-estudiantes.ts',/export const vocabularioCantos=([\s\S]*?) as const;/);
const acciones=parse('src/data/personajes-por-canto-estudiantes.ts',/export const personajesPorCanto=([\s\S]*?) as const;/);
const notas=parse('src/data/notas-pasajes-estudiantes.ts',/export const notasPasajesCantos=([\s\S]*?) as const;/);
const preguntasVuelta=parse('src/data/preguntas-vuelta-estudiantes.ts',/export const preguntasVueltaEstudiantes=([\s\S]*?) as const;/);
const lecturasIda=parse('src/data/lecturas-ida-estudiantes.ts',/export const lecturasIdaEstudiantes=([\s\S]*?) as const;/);
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
 const q=row.parte==='ida'?lecturasIda.find(x=>x.canto===row.canto)?.preguntas:preguntasVuelta.find(x=>x.canto===row.canto)?.preguntas;
 if(!q||q.length<3||q.some(v=>!v?.trim()))errors.push('Sin tres preguntas específicas: '+id);
 const v=vocab.find(x=>x.parte===row.parte&&x.canto===row.canto)?.terminos;
 if(!v||v.length<3||v.length>6)errors.push('Vocabulario fuera de 3-6: '+id);
 else {
  const text=corpus[row.parte].filter(x=>x.canto===row.canto).flatMap(x=>x.versos.map(y=>y.texto)).join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  for(const term of v){const token=term.termino.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
   if(!new RegExp('(^|[^a-z])'+token+'([^a-z]|$)','i').test(text))errors.push('Término no presente en corpus: '+id+'/'+term.termino);
  }
 }
 const ac=acciones.find(x=>x.parte===row.parte&&x.canto===row.canto)?.actuaciones;
 if(!ac?.length||ac.some(x=>!x.nombre?.trim()||!x.accion?.trim()))errors.push('Actuaciones de personajes ausentes: '+id);
 const p=proofs.find(x=>x.parte===row.parte&&x.canto===row.canto);
 if(!p||!p.estrofas?.length||!p.justificacion)errors.push('Sin prueba crítica: '+id);
 else for(const number of p.estrofas){
  const stanza=corpus[row.parte].find(x=>x.numero===number);
  if(!stanza||stanza.canto!==row.canto)errors.push('Estrofa incorrecta: '+id+' #'+number);
 }
 const nt=notas.find(x=>x.parte===row.parte&&x.canto===row.canto)?.notas;
 const totalPasajes=p?.estrofas?.length===1?3:p?.estrofas?.length;
 if(!nt||nt.length!==totalPasajes||nt.some(x=>!x.trim()))errors.push('Pasajes sin comentario individual: '+id);
 if(row.imagen&&!fs.existsSync(path.join(root,'public/media/fotografias-v3',row.imagen)))errors.push('Imagen ausente: '+row.imagen);
 const redirect='/estudiantes/'+row.parte+'/'+row.canto+'/ '+url+' 301';
 if(!redirects.includes(redirect))errors.push('Redirección incorrecta: '+id);
}
const all=[...corpus.ida,...corpus.vuelta];
const countVerses=all.reduce((n,x)=>n+x.versos.length,0);
if(all.length!==1193||countVerses!==7210)errors.push('Conteos del corpus inesperados: '+all.length+'/'+countVerses);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('OK: 46 guías con 3 preguntas específicas, 3-6 voces de glosario, personajes y comentarios de 104 pasajes. Corpus: 1193 estrofas / 7210 versos.');
