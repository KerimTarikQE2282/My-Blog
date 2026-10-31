// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Used for canonical URLs and absolute Open Graph image URLs.
  // Replace with your Cloudflare Pages domain (or custom domain).
  site: 'https://your-project.pages.dev',

  // Fully static: Cloudflare Pages serves dist/ directly, no adapter needed.
  output: 'static',

  markdown: {
    // Shiki runs at build time — highlighted HTML, zero client JS.
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
