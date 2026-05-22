import { graphql } from '~/lib/datocms/graphql';
import type { BuildSitemapUrlsFn } from '~/pages/sitemap.xml';
import { ArtisteUrlFragment, buildUrlForArtiste } from '~/lib/datocms/gqlUrlBuilder/artiste';
import { executeQueryOutsideAstro } from '~/lib/datocms/executeQuery';

// SITEMAP
export const buildSitemapUrls: BuildSitemapUrlsFn = async (executeQueryOptions) => {
  const { entries } = await executeQueryOutsideAstro(
    graphql(
      /* GraphQL */ `
        query BuildSitemapUrls {
          entries: allArtistes(first: 500) {
            ...ArtisteUrlFragment
          }
        }
      `,
      [ArtisteUrlFragment],
    ),
    executeQueryOptions,
  );

  return entries.map(buildUrlForArtiste);
};
