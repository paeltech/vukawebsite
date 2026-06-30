// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vukaventures.co',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/contact': '/work-with-us',
    '/apply': '/what-we-do/founder-in-residence',
    '/thesis': '/our-thesis',
  },
});
