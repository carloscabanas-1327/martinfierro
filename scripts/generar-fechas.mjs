// Genera src/data/fechas-paginas.json: fecha de publicación y de última modificación
// de cada página, tomadas del historial de git de su archivo en src/pages/.
// Se ejecuta a mano (node scripts/generar-fechas.mjs) con el historial completo:
// la compilación de Cloudflare usa una copia parcial del repositorio y no puede calcularlas.
import {execSync} from 'node:child_process';
import {readdirSync,statSync,writeFileSync} from 'node:fs';
import {join,relative} from 'node:path';

const raiz=new URL('..',import.meta.url).pathname;
if(execSync('git rev-parse --is-shallow-repository',{cwd:raiz}).toString().trim()==='true'){
 console.error('El repositorio no tiene el historial completo. Ejecutá antes: git fetch --unshallow');
 process.exit(1);
}
const paginas=join(raiz,'src/pages');
const archivos=[];
(function recorrer(d){for(const n of readdirSync(d)){const p=join(d,n);statSync(p).isDirectory()?recorrer(p):p.endsWith('.astro')&&archivos.push(p);}})(paginas);

const git=(args)=>execSync(`git log ${args}`,{cwd:raiz}).toString().trim().split('\n').filter(Boolean);
const dia=(iso)=>iso.slice(0,10);
const fechas={};
for(const archivo of archivos.sort()){
 const rel=relative(raiz,archivo);
 const historial=git(`--follow --format=%cI -- "${rel}"`);
 if(!historial.length) continue;
 // Ruta pública: src/pages/a/b/index.astro → /a/b/ ; [parte] queda como comodín.
 let ruta='/'+relative(paginas,archivo).replace(/\\/g,'/').replace(/\.astro$/,'').replace(/(^|\/)index$/,'');
 if(!ruta.endsWith('/')) ruta+='/';
 fechas[ruta]={publicado:dia(historial.at(-1)),modificado:dia(historial[0])};
}
writeFileSync(join(raiz,'src/data/fechas-paginas.json'),JSON.stringify(fechas,null,1)+'\n');
console.log(`Fechas de ${Object.keys(fechas).length} páginas en src/data/fechas-paginas.json`);
