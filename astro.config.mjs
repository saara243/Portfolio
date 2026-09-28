// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambiar a dominio propio = solo variables de entorno (ver .env.example y README).
const site = process.env.SITE_URL || 'https://saara243.github.io';
const base = process.env.BASE_PATH || '/Portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', ca: 'ca-ES', en: 'en-GB' },
      },
    }),
  ],
});
