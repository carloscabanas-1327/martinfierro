// Inventario reproducible de imágenes de la revista española. No inventa derechos ni aumenta resolución.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const pages='src/pages/revista';
const files=await fs.readdir(pages,{withFileTypes:true});
const inventory=[];
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
 inventory.push({ruta:'/revista/'+route+'/',imagen:src,ancho:width,alto:height,formato:format,bytes:size,hashSha256:hash,aptoAncho1600:width>=1600,estadoDerechos:'requiere cotejo de autor y licencia',error});
}
const duplicateHashes=inventory.filter((x,i)=>x.hashSha256&&inventory.findIndex(y=>y.hashSha256===x.hashSha256)!==i);
const report={articulosConImagen:inventory.length,imagenesPorDebajo1600:inventory.filter(x=>!x.aptoAncho1600).length,duplicadosBinarios:duplicateHashes.map(x=>x.ruta),imagenes:inventory};
await fs.writeFile('auditoria-imagenes-revista-es.json',JSON.stringify(report,null,2)+'\n','utf8');
console.log('Auditoría de revista: '+inventory.length+' artículos; '+report.imagenesPorDebajo1600+' imágenes inferiores a 1600 px; '+duplicateHashes.length+' duplicados binarios.');
for(const i of inventory.filter(x=>!x.aptoAncho1600||x.error))console.log('REVISAR '+i.ruta+' '+i.imagen+' '+(i.ancho??'?')+'x'+(i.alto??'?'));
if(inventory.some(x=>x.error))process.exit(1);

// El inventario sigue siendo diagnóstico por defecto. En modo de aprobación,
// incumplimientos visuales bloquean el candidato sin inventar licencias.
const strict=process.argv.includes('--strict');
if(strict && (report.imagenesPorDebajo1600>0 || duplicateHashes.length>0 || inventory.some(x=>x.estadoDerechos!=='verificado'))){
 console.error('NO APTO: resolución, duplicación o derechos sin verificar.');
 process.exitCode=1;
}
