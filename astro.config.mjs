// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real de producción antes de salir a producción.
  site: 'https://www.coopcasa.do',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});