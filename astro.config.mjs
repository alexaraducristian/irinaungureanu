import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Site publicat pe subdomeniul propriu psihoterapie.alexavolt.ro
  site: 'https://psihoterapie.alexavolt.ro',
  base: '/',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/mesaj-trimis'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindvite()],
  },
});
