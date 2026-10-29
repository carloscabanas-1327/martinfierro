import type {APIRoute} from 'astro';
import versos from '../../datos/versos.json';
export const prerender=true;
export const GET:APIRoute=()=>new Response(JSON.stringify(versos),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=86400'}});
