// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alfred-pi.github.io',
  base: '/jp-project-site',
  vite: {
    plugins: [tailwindcss()]
  }
});