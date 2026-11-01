import { chromium } from 'playwright';
import {mkdirSync,writeFileSync} from 'node:fs';
const widths=[320,375,390,768,1024,1440];
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const reports=[];
mkdirSync('auditoria-responsive',{recursive:true});
for(const width of widths){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4322/',{waitUntil:'networkidle',timeout:30000});
 const base=await page.evaluate(()=>({
  overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,
  scrollWidth:document.documentElement.scrollWidth,
  viewport:document.documentElement.clientWidth,
  heading:!!document.querySelector('h1'),
  links:[...document.querySelectorAll('header a')].filter(x=>x.getClientRects().length>0).length
 }));
 await page.screenshot({path:`auditoria-responsive/inicio-${width}.png`,fullPage:true});
 await page.goto('http://127.0.0.1:4322/buscar-documentos/',{waitUntil:'networkidle',timeout:30000});
 const input=page.locator('#mf-consulta-documental');
 await input.fill('pulperia');
 const count=await page.locator('.mf-documento:visible').count();
 await page.screenshot({path:`auditoria-responsive/busqueda-${width}.png`,fullPage:true});
 const searchOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth+1);
 reports.push({width,home:base,searchVisibleResults:count,searchOverflow,errors});
 await page.close();
}
// Zoom del navegador al 200 %: 720 px físicos equivalen a ~360 CSS px de viewport.
const page=await browser.newPage({viewport:{width:360,height:900},deviceScaleFactor:2});
await page.goto('http://127.0.0.1:4322/',{waitUntil:'networkidle'});
// No usar CSS zoom: altera escala de elementos pero no el viewport de media queries.
const zoom=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,viewport:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,offenders:[...document.querySelectorAll('body *')].map(el=>({tag:el.tagName,cls:el.className?.toString().slice(0,85),text:el.textContent?.trim().slice(0,40),right:Math.round(el.getBoundingClientRect().right),left:Math.round(el.getBoundingClientRect().left)})).filter(v=>v.right>document.documentElement.clientWidth+1).slice(0,30)}));
await page.screenshot({path:'auditoria-responsive/zoom-200.png',fullPage:true});
await page.close();await browser.close();
writeFileSync('auditoria-responsive/reporte.json',JSON.stringify({reports,zoom},null,2));
console.log(JSON.stringify({reports,zoom}));
if(reports.some(r=>r.home.overflow||r.searchOverflow||r.errors.length||r.searchVisibleResults<1)||zoom.overflow)process.exitCode=1;
