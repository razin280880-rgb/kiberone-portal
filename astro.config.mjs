import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import remarkRewriteLinks from './src/plugins/remark-rewrite-links.mjs';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Pagefind requires a build step; integration wires up `astro preview` to serve the index.
  site: 'http://localhost:3005',

  integrations: [tailwind(), pagefind()],

  markdown: {
    remarkPlugins: [remarkRewriteLinks],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  adapter: cloudflare()
});