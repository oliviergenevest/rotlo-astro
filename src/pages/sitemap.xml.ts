import type { APIRoute } from 'astro';
import { SitemapStream, streamToPromise } from 'sitemap';
import { baseUrl } from '~/lib/draftMode';
import { handleUnexpectedError } from '~/pages/api/utils';
import { toArrayBuffer } from '~/lib/toArrayBuffer';
import type { APIContext } from 'astro';

const allAstroFiles = import.meta.glob<string>('../pages/**/*.astro', {
  query: '?raw',
  import: 'default',
  eager: false,
});

const allBuildSitemapUrls = import.meta.glob<BuildSitemapUrlsFn>('../pages/**/_graphql.ts', {
  import: 'buildSitemapUrls',
  eager: false,
});

export type BuildSitemapUrlsFn = (ctx: {
  request: Request;
  responseHeaders: Headers;
}) => Promise<string[]>;

export const fetchSitemapUrls = async (request: Request, responseHeaders: Headers) => {
  let urlsPromises: Array<Promise<string[]>> = [];

  for (const astroFilePath of Object.keys(allAstroFiles)) {
    if (astroFilePath.includes('_')) {
      continue;
    }

    if (astroFilePath.includes('[')) {
      urlsPromises.push(
        (async () => {
          const graphqlPath =
            astroFilePath.replace('.astro', '').replace('/[slug]', '') + '/_graphql.ts';

        //  console.log('astroFilePath', astroFilePath);
         //  console.log( "replaced", astroFilePath.replace('.astro', '').replace('/[slug]', '') + '/_graphql.ts');

          const buildSitemapUrlsFnPromise = allBuildSitemapUrls[graphqlPath];

          if (!buildSitemapUrlsFnPromise) {
            throw new Error(`Missing buildSitemapUrls() in ${graphqlPath}`);
          }

          const buildSitemapUrls = await buildSitemapUrlsFnPromise();

          if (!buildSitemapUrls) {
            throw new Error(`Missing buildSitemapUrls() in ${graphqlPath}`);
          }

          return await buildSitemapUrls({ request, responseHeaders });
        })(),
      );
    } else {
      const url = astroFilePath.replace('./', '/').replace('.astro', '').replace('/index', '');
      //  console.log("URL",url);
      urlsPromises.push(Promise.resolve([url]));
    }
  }
//console.log("urlsPromises",urlsPromises);
  return (await Promise.all(urlsPromises)).flat();
};

export const GET: APIRoute = async ({ request, site }) => {
  try {
   // const stream = new SitemapStream({ hostname: baseUrl(request) });
  const siteUrl = site ? site.toString() : 'http://localhost:4321/';

 // console.log("URL utilisée pour le sitemap :", siteUrl);
    const stream = new SitemapStream({ hostname: siteUrl });

 //   console.log("stream.hostname ", baseUrl(request));
    const sitemapPromise = streamToPromise(stream);

    const responseHeaders = new Headers({
      'Content-Type': 'application/xml',
    });

    for (const url of await fetchSitemapUrls(request, responseHeaders)) {
      // const url = typeof item === 'string' ? item : item.url;
      // console.log("item : ", item);
     // console.log("url : ", url);
      if (    
        url === '/404' ||
        url === '/agenda-archives' ||
        url === '/credits' ||
       // url === '/spectacle/*' ||
        url === '/mentions-legales' ||
        url === '/protection-des-donnees'
      ) {
        continue;
      }

      //stream.write({ url });
           stream.write(typeof url === 'string' ? { url } : url);
    }

    stream.end();

    const sitemap = await sitemapPromise;

    return new Response(toArrayBuffer(sitemap), {
      headers: responseHeaders,
    });
  } catch (error) {
    return handleUnexpectedError( error);
  }
};