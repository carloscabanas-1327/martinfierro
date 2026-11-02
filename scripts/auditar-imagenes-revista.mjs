// Inventario reproducible de imágenes de la revista española. No inventa derechos ni aumenta resolución.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const pages='src/pages/revista';
const files=await fs.readdir(pages,{withFileTypes:true});
const inventory=[];
let derechos={};
const manifestPath='datos/auditoria/derechos-imagenes-revista.json';
try { derechos=JSON.parse(await fs.readFile(manifestPath,'utf8')); } catch(e) { if(e.code!=='ENOENT') throw e; }

for(const entry of files){
 if(!entry.isDirectory())continue;
 const route=entry.name;
 const source=path.join(pages,route,'index.astro');
 let content;
 try{content=await fs.readFile(source,'utf8')}catch{continue}
 const src=content.match(/<EditorialSection[\s\S]*?\bimage="(\/media\/[^"]+)"/)?.[1];
 if(!src)continue;
 const local=path.join('public',src);
 let size,width,height,format,hash,error;
 try{
  const buffer=await fs.readFile(local);
  const m=await sharp(buffer).metadata();
  size=buffer.length;width=m.width;height=m.height;format=m.format;
  hash=crypto.createHash('sha256').update(buffer).digest('hex');
 }catch(e){error=String(e);}
 inventory.push({ruta:'/revista/'+route+'/',imagen:src,ancho:width,alto:height,formato:format,bytes:size,hashSha256:hash,aptoAncho1600:width>=1600,estadoDerechos:(derechos[src]?.verificado===true && derechos[src]?.autor && derechos[src]?.licencia && derechos[src]?.fuente ? 'verificado':'requiere cotejo de autor y licencia'),error});
}
// Las declaraciones sin evidencia no certifican derechos; exigir además datos de origen y crédito.
const rightsPending=inventory.filter(x=>x.estadoDerechos!=='verificado');
const duplicateHashes=inventory.filter((x,i)=>x.hashSha256&&inventory.findIndex(y=>y.hashSha256===x.hashSha256)!==i);
const report={articulosConImagen:inventory.length,imagenesPorDebajo1600:inventory.filter(x=>!x.aptoAncho1600).length,duplicadosBinarios:duplicateHashes.map(x=>x.ruta),derechosPendientes:rightsPending.map(x=>x.ruta),imagenes:inventory};
await fs.writeFile('auditoria-imagenes-revista-es.json',JSON.stringify(report,null,2)+'\n','utf8');
console.log('Auditoría de revista: '+inventory.length+' artículos; '+report.imagenesPorDebajo1600+' imágenes inferiores a 1600 px; '+duplicateHashes.length+' duplicados binarios.');
for(const i of inventory.filter(x=>!x.aptoAncho1600||x.error))console.log('REVISAR '+i.ruta+' '+i.imagen+' '+(i.ancho??'?')+'x'+(i.alto??'?'));
if(inventory.some(x=>x.error))process.exit(1);

// El inventario sigue siendo diagnóstico por defecto. En modo de aprobación,
// incumplimientos visuales bloquean el candidato sin inventar licencias.
const strict=process.argv.includes('--strict');
if(strict && (inventory.length===0 || report.imagenesPorDebajo1600>0 || duplicateHashes.length>0 || rightsPending.length>0)){
 console.error('NO APTO: resolución, duplicación o derechos sin verificar.');
 process.exitCode=1;
}
