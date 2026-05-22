import { graphql, readFragment, type FragmentOf } from '../graphql';

export const ArtisteUrlFragment = graphql(/* GraphQL */ `
  fragment ArtisteUrlFragment on ArtisteRecord {
    slug
  }
`);
export function buildUrlForArtiste(artiste: FragmentOf<typeof ArtisteUrlFragment>) {
  const data = readFragment(ArtisteUrlFragment, artiste);
  return `/artiste/${data.slug}`;
}
