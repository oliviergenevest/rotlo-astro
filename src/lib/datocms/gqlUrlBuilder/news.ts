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
