import type {APIRoute} from 'astro';
import {partiIt,urlCantoIt,romano,type ParteIt} from '../../lib/testena';
// Índice compacto de los 7.205 versos de Testena para el buscador de /it/cerca/.
export const prerender=true;
const versi=(Object.keys(partiIt) as ParteIt[]).flatMap(p=>partiIt[p].canti.flatMap(c=>c.estrofe.flatMap(e=>e.versi.map(v=>({
 t:v.testo, u:`${urlCantoIt(p,c.numero)}#${v.id}`, r:`${p==='andata'?'I':'II'} · ${romano(c.numero)} · ${e.numero}.${v.linea}`
})))));
export const GET:APIRoute=()=>new Response(JSON.stringify(versi),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=86400'}});
