import { graphql } from '~/lib/datocms/graphql';

import { ItemsListBlockFragment } from '../ItemsListBlock/fragments';
import { PageInlineFragment } from '~/components/inlineRecord/PageInline/fragments';
import { PageLinkFragment } from '~/components/linkToRecord/PageLink/fragments';
import { NewsInlineFragment } from '~/components/inlineRecord/NewsInline/fragments';

import { SlideshowBlock } from '~/components/blocks/SlideshowBlock';
import { SlideshowBlockFragment } from '~/components/blocks/SlideshowBlock/fragments';
import { VideoEmbedBlockFragment } from '~/components/blocks/VideoEmbedBlock/fragments';
import { ImageTextBlock } from '~/components/blocks/ImageTextBlock';
import { ImageTextBlockFragment } from '~/components/blocks/ImageTextBlock/fragments';

import { ImageBlock } from '~/components/blocks/ImageBlock';
import { ImageBlockFragment } from '~/components/blocks/ImageBlock/fragments';
import { ImageGalleryBlock } from '~/components/blocks/ImageGalleryBlock';
import { ImageGalleryBlockFragment } from '~/components/blocks/ImageGalleryBlock/fragments';

import { ButtonBlock } from '~/components/blocks/ButtonBlock';
import { ButtonBlockFragment } from '~/components/blocks/ButtonBlock/fragments';
import { ButtonsListBlock } from '~/components/blocks/ButtonsListBlock';
import { ButtonsListBlockFragment } from '~/components/blocks/ButtonsListBlock/fragments';
import { LogosListBlockFragment } from '~/components/blocks/LogosListBlock/fragments';


/**
 * Let's define the GraphQL fragment needed for the component to function.
 *
 * GraphQL fragment colocation keeps queries near the components using them,
 * improving maintainability and encapsulation. Fragment composition enables
 * building complex queries from reusable parts, promoting code reuse and
 * efficiency. Together, these practices lead to more modular, maintainable, and
 * performant GraphQL implementations by allowing precise data fetching and
 * easier code management.
 *
 * Learn more: https://gql-tada.0no.co/guides/fragment-colocation
 */

export const SectionBlockFragment = graphql(
  /* GraphQL */ `
    fragment SectionBlockFragment on SectionBlockRecord {
      backgroundColor {
        hex
      }
      gradientBackground
      sectionId

      twoColonnes
      premiereColonne {
        value
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on ImageBlockRecord {
            ...ImageBlockFragment
          }
          ... on ButtonBlockRecord {
            ...ButtonBlockFragment
          }
          ... on ButtonsListBlockRecord {
            ...ButtonsListBlockFragment
          }
        }
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ...PageLinkFragment
          ...PageInlineFragment
        }
      }

      structuredText {
        value
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on ItemsListBlockRecord {
            ...ItemsListBlockFragment
          }
          ... on ImageBlockRecord {
            ...ImageBlockFragment
          }
          ... on ImageGalleryBlockRecord {
            ...ImageGalleryBlockFragment
          }
          ... on ButtonBlockRecord {
            ...ButtonBlockFragment
          }
            ... on ButtonsListBlockRecord {
            ...ButtonsListBlockFragment
          }
          ... on ImageTextBlockRecord {
            ...ImageTextBlockFragment
          }
         
        
          ... on SlideshowBlockRecord {
            ...SlideshowBlockFragment
          }
          ... on LogosListBlockRecord {
            ...LogosListBlockFragment
          }

          ... on VideoEmbedBlockRecord {
            ...VideoEmbedBlockFragment
          }
        }

        links {
          ... on RecordInterface {
            id
            __typename
          }

          ...PageLinkFragment
          ...PageInlineFragment
          ...NewsInlineFragment
        }
      }
    }
  `,
  [
    ItemsListBlockFragment,
    PageInlineFragment,
    PageLinkFragment,
    NewsInlineFragment,
    ImageTextBlockFragment,
    ImageBlockFragment,
    ImageGalleryBlockFragment,
    ButtonBlockFragment,
    ButtonsListBlockFragment,
    LogosListBlockFragment,
    VideoEmbedBlockFragment,
    SlideshowBlockFragment,
  ],
);
