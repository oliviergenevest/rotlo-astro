import { graphql } from '~/lib/datocms/graphql';
import type { BuildSitemapUrlsFn } from '~/pages/sitemap.xml';
import { NewsUrlFragment, buildUrlForNews } from '~/lib/datocms/gqlUrlBuilder/news';
import { executeQueryOutsideAstro } from '~/lib/datocms/executeQuery';

// SITEMAP
export const buildSitemapUrls: BuildSitemapUrlsFn = async (executeQueryOptions) => {
  const { entries } = await executeQueryOutsideAstro(
    graphql(
      /* GraphQL */ `
        query BuildSitemapUrls {
          entries: allNews(first: 500) {
            ...NewsUrlFragment
          }
        }
      `,
      [NewsUrlFragment],
    ),
    executeQueryOptions,
  );

  return entries.map(buildUrlForNews);
};
