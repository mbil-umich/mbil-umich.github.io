// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbil.github.io',
  vite: {
    // Cast avoids a cosmetic type clash between Tailwind's bundled Vite
    // types and Astro's; runtime behavior is unaffected.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
