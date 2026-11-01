import { defineConfig } from 'astro/config';
// Public canonical host. Preview deployments may use separate URLs,
// but their canonical links must consistently reference the production site.
const site = 'https://martinfierro.org';
export default defineConfig({ output: 'static', site });
