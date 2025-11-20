// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), react(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
    // Use Astro's default image service so assets are served directly
  }),
});
