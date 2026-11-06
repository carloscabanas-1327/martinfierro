// Generate deterministic SEO assets from the actual built Astro pages.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const origin='https://martinfierro.org';
const excludes=new Set(['/404/']);
async function walk(dir){
 const entries=await readdir(dir,{withFileTypes:true});
 const out=[];
 for(const item of entries){
  const full=path.join(dir,item.name);
  if(item.isDirectory())out.push(...await walk(full));
  else if(item.isFile()&&item.name==='index.html')out.push(full);
 }
 return out;
}
const files=await walk(root);
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const locations=[];
const pages=new Map(); // urlPath -> {lang, alternates:[{hreflang,href}]}
let errors=[];
for(const file of files){
 const rel=path.relative(root,path.dirname(file)).split(path.sep).join('/');
 const urlPath=rel?'/'+rel+'/':'/';
 if(excludes.has(urlPath))continue;
 const html=await readFile(file,'utf8');
 if(/<meta\s+name=["']robots["'][^>]*noindex/i.test(html))continue;
 const canonical=(html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i)||[])[1];
 const expected=origin+urlPath;
 if(canonical!==expected)errors.push({urlPath,expected,canonical});
 const lang=(html.match(/<html\s+lang=["']([^"']+)/i)||[])[1];
 if(urlPath.startsWith('/en/')&&lang!=='en-US')errors.push({urlPath,issue:'English route missing en-US language',lang});
 if((urlPath==='/it/'||urlPath.startsWith('/it/'))&&lang!=='it-IT')errors.push({urlPath,issue:'Italian route missing it-IT language',lang});
 if((urlPath==='/pt/'||urlPath.startsWith('/pt/'))&&lang!=='pt-BR')errors.push({urlPath,issue:'Brazilian route missing pt-BR language',lang});
 if((urlPath==='/fr/'||urlPath.startsWith('/fr/'))&&lang!=='fr-FR')errors.push({urlPath,issue:'French route missing fr-FR language',lang});
 if((urlPath==='/de/'||urlPath.startsWith('/de/'))&&lang!=='de-DE')errors.push({urlPath,issue:'German route missing de-DE language',lang});
 if((urlPath==='/ru/'||urlPath.startsWith('/ru/'))&&lang!=='ru-RU')errors.push({urlPath,issue:'Russian route missing ru-RU language',lang});
 if((urlPath==='/zh/'||urlPath.startsWith('/zh/'))&&lang!=='zh-CN')errors.push({urlPath,issue:'Chinese route missing zh-CN language',lang});
 const alternates=[...html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi)].map(m=>({hreflang:m[1],href:m[2]}));
 pages.set(urlPath,{lang,alternates});
 locations.push(expected);
}
// hreflang: cada destino debe existir, ser indexable, tener ese idioma y devolver el enlace.
let hreflangLinks=0;
for(const [urlPath,{alternates}] of pages){
 if(!alternates.length)continue;
 const self=alternates.find(a=>a.href===origin+urlPath);
 if(!self)errors.push({urlPath,issue:'hreflang set without self-reference'});
 for(const a of alternates){
  hreflangLinks++;
  if(!a.href.startsWith(origin+'/')){errors.push({urlPath,issue:'hreflang outside site',href:a.href});continue;}
  const target=a.href.slice(origin.length);
  const info=pages.get(target);
  if(!info){errors.push({urlPath,issue:'hreflang target missing or noindex',href:a.href});continue;}
  if(a.hreflang==='x-default')continue;
  if(info.lang!==a.hreflang)errors.push({urlPath,issue:'hreflang language mismatch',href:a.href,declared:a.hreflang,actual:info.lang});
  if(!info.alternates.some(b=>b.href===origin+urlPath))errors.push({urlPath,issue:'hreflang not reciprocal',href:a.href});
 }
}
if(errors.length){console.error('Invalid canonical, page language or hreflang',errors.slice(0,20));process.exit(1)}
locations.sort((a,b)=>a.localeCompare(b,'en'));
const entry=u=>{const alts=pages.get(u.slice(origin.length))?.alternates||[];return `  <url><loc>${esc(u)}</loc>${alts.map(a=>`<xhtml:link rel="alternate" hreflang="${esc(a.hreflang)}" href="${esc(a.href)}"/>`).join('')}</url>`};
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+locations.map(entry).join('\n')+'\n</urlset>\n';
await writeFile(path.join(root,'sitemap.xml'),sitemap,'utf8');
await writeFile(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,'utf8');
console.log(`SEO OK: ${locations.length} indexable URLs, canonical and language verified; ${hreflangLinks} hreflang links reciprocal; sitemap.xml and robots.txt generated.`);
