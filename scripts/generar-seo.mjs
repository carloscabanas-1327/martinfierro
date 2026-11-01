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
 locations.push(expected);
}
if(errors.length){console.error('Invalid canonical or page language',errors.slice(0,20));process.exit(1)}
locations.sort((a,b)=>a.localeCompare(b,'en'));
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+locations.map(u=>`  <url><loc>${esc(u)}</loc></url>`).join('\n')+'\n</urlset>\n';
await writeFile(path.join(root,'sitemap.xml'),sitemap,'utf8');
await writeFile(path.join(root,'robots.txt'),'User-agent: *\nDisallow: /\n','utf8');
console.log(`SEO OK: ${locations.length} indexable URLs, canonical and language verified; sitemap.xml and robots.txt generated.`);
