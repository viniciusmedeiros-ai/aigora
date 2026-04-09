import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aigora.vercel.app',
  integrations: [tailwind()],
});
