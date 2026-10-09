import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.myp-abogados.com.ar', // <--- ESTO ES CLAVE PARA EL SITEMAP
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});