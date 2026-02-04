import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// See https://docs.astro.build for more information about Astro configuration.
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // By default Astro will prerender all pages. You can override this per route if needed.
});
