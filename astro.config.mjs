import { defineConfig } from 'astro/config';
// Dominio provisional hasta que MARTINFIERRO.ORG esté conectado a Cloudflare Pages.
// Para migrar: definir PUBLIC_SITE_URL=https://martinfierro.org en el build de producción.
const site = process.env.PUBLIC_SITE_URL || 'https://martinfierro.pages.dev';
export default defineConfig({ output: 'static', site });
