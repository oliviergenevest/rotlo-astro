import { graphql, readFragment, type FragmentOf } from '../graphql';

export const PageUrlFragment = graphql(/* GraphQL */ `
  fragment PageUrlFragment on PageRecord {
    slug
  }
`);

export function buildUrlForPage(page: FragmentOf<typeof PageUrlFragment>) {
  const data = readFragment(PageUrlFragment, page);
  //console.log("data page.ts:", data);
  return `/${data.slug}`;
}
