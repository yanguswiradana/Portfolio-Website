import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

export default defineConfig({
  site: undefined,
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon(),
    react(),
    keystatic(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});

