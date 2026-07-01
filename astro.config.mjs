// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbil.kines.umich.edu',
  integrations: [sitemap()],
  vite: {
    // Cast avoids a cosmetic type clash between Tailwind's bundled Vite
    // types and Astro's; runtime behavior is unaffected.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
