import { graphql, readFragment, type FragmentOf } from '../graphql';

export const NewsUrlFragment = graphql(/* GraphQL */ `
  fragment NewsUrlFragment on NewsRecord {
    slug
  }
`);

export function buildUrlForNews(news: FragmentOf<typeof NewsUrlFragment>) {
  const data = readFragment(NewsUrlFragment, news);
  return `/news/${data.slug}`;
}

export const ArtisteUrlFragment = graphql(/* GraphQL */ `
  fragment ArtisteUrlFragment on ArtisteRecord {
    slug
  }
`);
export function buildUrlForArtiste(artiste: FragmentOf<typeof ArtisteUrlFragment>) {
  const data = readFragment(ArtisteUrlFragment, artiste);
  return `/artiste/${data.slug}`;
}
