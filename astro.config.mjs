// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [react(), icon()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true, // Ahora inglés será /en/ y español /es/
      redirectToDefaultLocale: true 
    }
  },
  redirects: {
    '/wp-json': '/404',
    '/wp-json/[...slug]': '/404',
  }
});