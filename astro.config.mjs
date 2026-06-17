import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import bundlesize from 'vite-plugin-bundlesize';

import netlify from '@astrojs/netlify';

/*

*/

// https://astro.build/config
export default defineConfig({
  site: 'https://rockontheloule.org',
  output: 'server',
  trailingSlash: 'never',
  base: '/',

  security: {
    checkOrigin: false,
  },

  vite: {
    build: {
      sourcemap: 'hidden',
    },
  },

  env: {
    schema: {
      DRAFT_MODE_HOSTNAME: envField.string({
        context: 'server',
        access: 'secret',
        default: 'localhost',
      }),
      PUBLIC_HOSTNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DATOCMS_DRAFT_CONTENT_CDA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DATOCMS_CMA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      SECRET_API_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      SIGNED_COOKIE_JWT_SECRET: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DRAFT_MODE_COOKIE_NAME: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
    validateSecrets: true,
  },

  integrations: [
    react(),
    icon({
      iconDir: 'src/icons',
      include: {
        // mdi: ["*"], // (Default) Loads entire Material Design Icon set
        teenyicons: ['facebook-outline', 'youtube-outline'], // Loads only Teeny Icon's "account" SVG
      },
    }),
  ],

  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  adapter: netlify(),
  redirects: {
    '/archives/': '/asso',
    '/infos-pratiques/': '/festival-champ-des-ondes-2026#infos-pratiques',
    '/programmation/': '/festival-champ-des-ondes-2026#programmation',
    '/billetterie/': '/festival-champ-des-ondes-2026#billetterie',
    '/benevoles/': '/festival-champ-des-ondes-2026#benevoles',
    '/agenda/': '/news',
    '/contacts/': '/contacts',
    '/agenda/assemblee-generale-a-la-salle-stephane-perrin/': '/news/assemblee-generale',
    '/agenda/festival-le-champ-des-ondes/' : '/festival-champ-des-ondes-2026',
    '/agenda/soiree-theatre-quand-viendra-la-vague/': '/news/soiree-theatre',
    '/agenda/festival-rock-on-the-loule-2024/': '/festival-champ-des-ondes-2026',



  },
});
