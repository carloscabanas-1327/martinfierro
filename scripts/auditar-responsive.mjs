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
const page=await browser.newPage({viewport:{width:720,height:900}});
await page.goto('http://127.0.0.1:4322/',{waitUntil:'networkidle'});
await page.evaluate(()=>document.documentElement.style.zoom='200%');
const zoom=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,viewport:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth}));
await page.screenshot({path:'auditoria-responsive/zoom-200.png',fullPage:true});
await page.close();await browser.close();
writeFileSync('auditoria-responsive/reporte.json',JSON.stringify({reports,zoom},null,2));
console.log(JSON.stringify({reports,zoom}));
if(reports.some(r=>r.home.overflow||r.searchOverflow||r.errors.length||r.searchVisibleResults<1)||zoom.overflow)process.exitCode=1;
