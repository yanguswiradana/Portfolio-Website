import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

const isProdBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: undefined,
  // Production is fully static (prevents the nodejs18.x runtime rejection).
  // Dev runs a server so Keystatic's dynamic /keystatic + /api routes work.
  output: isProdBuild ? 'static' : 'server',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap(),
    icon(),
    react(),
    // Keystatic injects prerender:false routes that need a server, so it is
    // dev-only; production stays pure static.
    ...(isProdBuild ? [] : [keystatic()]),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
