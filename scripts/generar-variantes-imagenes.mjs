// Variantes responsive sin ampliar artificialmente las imágenes originales.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
let generated=0,skipped=0;
for(const section of ['fotografias-v3','revista']){
 const base=path.join('public','media',section);
 const dest=path.join('public','media','responsive',section);
 await fs.mkdir(dest,{recursive:true});
 for(const file of await fs.readdir(base)){
  if(!file.endsWith('.webp'))continue;
  const source=path.join(base,file);
  const meta=await sharp(source).metadata();
  if(!meta.width||meta.width<480){skipped++;continue;}
  for(const width of [480,960]){
   if(meta.width<=width)continue;
   const output=path.join(dest,file.replace(/\.webp$/,\`-${width}.webp\`));
   await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:80,effort:4}).toFile(output);
   const result=await sharp(output).metadata();
   if(result.width!==width||result.format!=='webp')throw new Error('Variante inválida: '+output);
   generated++;
  }
 }
}
console.log('RESPONSIVE OK: '+generated+' variantes WebP 480/960, '+skipped+' originales demasiado pequeños. Nunca se aumentó la resolución.');
