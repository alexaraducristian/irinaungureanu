import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.psihoterapeutcorinaungureanu.ro',
  base: '/',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
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
