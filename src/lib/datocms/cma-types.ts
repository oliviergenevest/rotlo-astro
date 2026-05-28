import type { ItemTypeDefinition } from '@datocms/cma-client';

type EnvironmentSettings = {
  locales: 'fre';
};

export type MenuDropdown = ItemTypeDefinition<
  EnvironmentSettings,
  'By-PLHJmTdexRj8wE-K11g',
  {
    title: {
      type: 'string';
    };
    items: {
      type: 'rich_text';
      blocks: MenuItem;
    };
  }
>;
export const MenuDropdown = {
  ID: 'By-PLHJmTdexRj8wE-K11g',
  REF: { type: 'item_type', id: 'By-PLHJmTdexRj8wE-K11g' },
} as const;

export type VideoEmbedBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'B-tv1t2BRlutpHQle5I_bQ',
  {
    video: {
      type: 'video';
    };
  }
>;
export const VideoEmbedBlock = {
  ID: 'B-tv1t2BRlutpHQle5I_bQ',
  REF: { type: 'item_type', id: 'B-tv1t2BRlutpHQle5I_bQ' },
} as const;

export type ImageGalleryBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'CoOdvsbUR8GLtGeuenXzMw',
  {
    assets: {
      type: 'gallery';
    };
  }
>;
export const ImageGalleryBlock = {
  ID: 'CoOdvsbUR8GLtGeuenXzMw',
  REF: { type: 'item_type', id: 'CoOdvsbUR8GLtGeuenXzMw' },
} as const;

export type SideContentBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'DlakB1hZSpKeEj_xI1TqXg',
  {
    content: {
      type: 'structured_text';
      blocks: ImageGalleryBlock | ImageBlock | VideoBlock;
    };
  }
>;
export const SideContentBlock = {
  ID: 'DlakB1hZSpKeEj_xI1TqXg',
  REF: { type: 'item_type', id: 'DlakB1hZSpKeEj_xI1TqXg' },
} as const;

export type ImageTextBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'FeXEoKRPR3uYlMCPSm3bOA',
  {
    image: {
      type: 'file';
    };
    text: {
      type: 'text';
    };
  }
>;
export const ImageTextBlock = {
  ID: 'FeXEoKRPR3uYlMCPSm3bOA',
  REF: { type: 'item_type', id: 'FeXEoKRPR3uYlMCPSm3bOA' },
} as const;

export type Page = ItemTypeDefinition<
  EnvironmentSettings,
  'JdG722SGTSG_jEB1Jx-0XA',
  {
    title: {
      type: 'string';
    };
    background_color: {
      type: 'color';
    };
    sections: {
      type: 'rich_text';
      blocks: SectionBlock;
    };
    slug: {
      type: 'slug';
    };
    seo_settings_social: {
      type: 'seo';
    };
    seo_analysis: {
      type: 'json';
    };
    position: {
      type: 'integer';
    };
  }
>;
export const Page = {
  ID: 'JdG722SGTSG_jEB1Jx-0XA',
  REF: { type: 'item_type', id: 'JdG722SGTSG_jEB1Jx-0XA' },
} as const;

export type MenuItem = ItemTypeDefinition<
  EnvironmentSettings,
  'MExsxQI3RruCQnOm99H5UA',
  {
    title: {
      type: 'string';
    };
    page: {
      type: 'link';
    };
  }
>;
export const MenuItem = {
  ID: 'MExsxQI3RruCQnOm99H5UA',
  REF: { type: 'item_type', id: 'MExsxQI3RruCQnOm99H5UA' },
} as const;

export type LogoBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'N0foyMh1R4CUVOuIjhqLCw',
  {
    image: {
      type: 'file';
    };
    url: {
      type: 'string';
    };
  }
>;
export const LogoBlock = {
  ID: 'N0foyMh1R4CUVOuIjhqLCw',
  REF: { type: 'item_type', id: 'N0foyMh1R4CUVOuIjhqLCw' },
} as const;

export type Social = ItemTypeDefinition<
  EnvironmentSettings,
  'OMYS36gxRwa1tDwDsHe1Cg',
  {
    url: {
      type: 'string';
    };
    name: {
      type: 'string';
    };
  }
>;
export const Social = {
  ID: 'OMYS36gxRwa1tDwDsHe1Cg',
  REF: { type: 'item_type', id: 'OMYS36gxRwa1tDwDsHe1Cg' },
} as const;

export type Hashtag = ItemTypeDefinition<
  EnvironmentSettings,
  'OUXoCQxZSs-gNh3_zi9jIw',
  {
    name: {
      type: 'string';
    };
  }
>;
export const Hashtag = {
  ID: 'OUXoCQxZSs-gNh3_zi9jIw',
  REF: { type: 'item_type', id: 'OUXoCQxZSs-gNh3_zi9jIw' },
} as const;

export type IframeBilletterie = ItemTypeDefinition<
  EnvironmentSettings,
  'O7E7_pLYR4C3iX0qAZgrbg',
  {}
>;
export const IframeBilletterie = {
  ID: 'O7E7_pLYR4C3iX0qAZgrbg',
  REF: { type: 'item_type', id: 'O7E7_pLYR4C3iX0qAZgrbg' },
} as const;

export type OlivBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'PvdKSAiJQuS05TbVjj-8aw',
  {
    slug: {
      type: 'string';
    };
    content: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
  }
>;
export const OlivBlock = {
  ID: 'PvdKSAiJQuS05TbVjj-8aw',
  REF: { type: 'item_type', id: 'PvdKSAiJQuS05TbVjj-8aw' },
} as const;

export type Agenda = ItemTypeDefinition<
  EnvironmentSettings,
  'RT2noqDTS-KiUbE-nPeO9Q',
  {
    spectacle: {
      type: 'link';
    };
    start_date: {
      type: 'date';
    };
    end_date: {
      type: 'date';
    };
    location: {
      type: 'text';
    };
    city: {
      type: 'string';
    };
    content: {
      type: 'text';
    };
  }
>;
export const Agenda = {
  ID: 'RT2noqDTS-KiUbE-nPeO9Q',
  REF: { type: 'item_type', id: 'RT2noqDTS-KiUbE-nPeO9Q' },
} as const;

export type Artiste = ItemTypeDefinition<
  EnvironmentSettings,
  'Uf5dPveOSXmWNFstjMYwaA',
  {
    title: {
      type: 'string';
    };
    description: {
      type: 'text';
    };
    image: {
      type: 'file';
    };
    video: {
      type: 'video';
    };
    hashtag_liste: {
      type: 'links';
    };
    website_url: {
      type: 'string';
    };
    facebook_url: {
      type: 'string';
    };
    instagram_url: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Artiste = {
  ID: 'Uf5dPveOSXmWNFstjMYwaA',
  REF: { type: 'item_type', id: 'Uf5dPveOSXmWNFstjMYwaA' },
} as const;

export type ButtonBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'VODPKvajTCyuhtbzrgxVbg',
  {
    label: {
      type: 'string';
    };
    target_url: {
      type: 'string';
    };
    external: {
      type: 'boolean';
    };
    icon: {
      type: 'string';
    };
  }
>;
export const ButtonBlock = {
  ID: 'VODPKvajTCyuhtbzrgxVbg',
  REF: { type: 'item_type', id: 'VODPKvajTCyuhtbzrgxVbg' },
} as const;

export type Homepage = ItemTypeDefinition<
  EnvironmentSettings,
  'WIoufiPMRku6_TonnP2-lw',
  {
    cta_text: {
      type: 'text';
    };
    sections: {
      type: 'rich_text';
      blocks: SectionBlock;
    };
    title: {
      type: 'string';
    };
    background_color: {
      type: 'color';
    };
    background_image: {
      type: 'file';
    };
    seo_settings_social: {
      type: 'seo';
    };
    seo_analysis: {
      type: 'json';
    };
  }
>;
export const Homepage = {
  ID: 'WIoufiPMRku6_TonnP2-lw',
  REF: { type: 'item_type', id: 'WIoufiPMRku6_TonnP2-lw' },
} as const;

export type Navigation = ItemTypeDefinition<
  EnvironmentSettings,
  'W-p7tJJbQHWHgqxtHp-c3g',
  {
    items: {
      type: 'link';
    };
    position: {
      type: 'integer';
    };
    parent_id: {
      type: 'string';
    };
  }
>;
export const Navigation = {
  ID: 'W-p7tJJbQHWHgqxtHp-c3g',
  REF: { type: 'item_type', id: 'W-p7tJJbQHWHgqxtHp-c3g' },
} as const;

export type ButtonsListBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'YigEO7WZTWyiHkkTIszgEw',
  {
    items: {
      type: 'rich_text';
      blocks: ButtonBlock;
    };
  }
>;
export const ButtonsListBlock = {
  ID: 'YigEO7WZTWyiHkkTIszgEw',
  REF: { type: 'item_type', id: 'YigEO7WZTWyiHkkTIszgEw' },
} as const;

export type SlideshowBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'ZEduT1uPQXaAnUF_67-WiA',
  {
    items: {
      type: 'rich_text';
      blocks: ImageTextBlock;
    };
  }
>;
export const SlideshowBlock = {
  ID: 'ZEduT1uPQXaAnUF_67-WiA',
  REF: { type: 'item_type', id: 'ZEduT1uPQXaAnUF_67-WiA' },
} as const;

export type ItemsListBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'aGHuqJTjQYK1h2jOo0hywA',
  {
    items: {
      type: 'links';
    };
    format: {
      type: 'string';
    };
  }
>;
export const ItemsListBlock = {
  ID: 'aGHuqJTjQYK1h2jOo0hywA',
  REF: { type: 'item_type', id: 'aGHuqJTjQYK1h2jOo0hywA' },
} as const;

export type Spectacle = ItemTypeDefinition<
  EnvironmentSettings,
  'amh4MONlRNShk1t9JeKfJQ',
  {
    card_image: {
      type: 'file';
    };
    seo_settings_social: {
      type: 'seo';
    };
    card_subtitle: {
      type: 'text';
    };
    slug: {
      type: 'slug';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    main_image: {
      type: 'file';
    };
    main_content: {
      type: 'structured_text';
      blocks: VideoEmbedBlock | ImageGalleryBlock | ImageBlock | VideoBlock;
    };
    side_content: {
      type: 'rich_text';
      blocks: SideContentBlock;
    };
  }
>;
export const Spectacle = {
  ID: 'amh4MONlRNShk1t9JeKfJQ',
  REF: { type: 'item_type', id: 'amh4MONlRNShk1t9JeKfJQ' },
} as const;

export type AgendaBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'bKQIdzPsQ8uA5HMt3hqgXA',
  {
    display_name: {
      type: 'boolean';
    };
    passed_events: {
      type: 'boolean';
    };
    number_events: {
      type: 'integer';
    };
  }
>;
export const AgendaBlock = {
  ID: 'bKQIdzPsQ8uA5HMt3hqgXA',
  REF: { type: 'item_type', id: 'bKQIdzPsQ8uA5HMt3hqgXA' },
} as const;

export type Member = ItemTypeDefinition<
  EnvironmentSettings,
  'bsWUpJLzQ-qRDm1D2LCw4Q',
  {
    image: {
      type: 'file';
    };
    filter: {
      type: 'boolean';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    content: {
      type: 'text';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Member = {
  ID: 'bsWUpJLzQ-qRDm1D2LCw4Q',
  REF: { type: 'item_type', id: 'bsWUpJLzQ-qRDm1D2LCw4Q' },
} as const;

export type LogosListBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'bwS8-hPkR5SO-oURwZzSug',
  {
    items: {
      type: 'rich_text';
      blocks: LogoBlock;
    };
  }
>;
export const LogosListBlock = {
  ID: 'bwS8-hPkR5SO-oURwZzSug',
  REF: { type: 'item_type', id: 'bwS8-hPkR5SO-oURwZzSug' },
} as const;

export type News = ItemTypeDefinition<
  EnvironmentSettings,
  'cKDai5eJSrmcU3xTEwcG4g',
  {
    card_image: {
      type: 'file';
    };
    seo_settings_social: {
      type: 'seo';
    };
    card_subtitle: {
      type: 'text';
    };
    slug: {
      type: 'slug';
    };
    title: {
      type: 'string';
    };
    badge_label: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    main_content: {
      type: 'structured_text';
      blocks: ImageGalleryBlock | ImageBlock | VideoBlock;
    };
    side_content: {
      type: 'rich_text';
      blocks: SideContentBlock;
    };
    position: {
      type: 'integer';
    };
  }
>;
export const News = {
  ID: 'cKDai5eJSrmcU3xTEwcG4g',
  REF: { type: 'item_type', id: 'cKDai5eJSrmcU3xTEwcG4g' },
} as const;

export type ImageBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'dZOhbVOTSpeaaA-wQMgPCA',
  {
    asset: {
      type: 'file';
    };
  }
>;
export const ImageBlock = {
  ID: 'dZOhbVOTSpeaaA-wQMgPCA',
  REF: { type: 'item_type', id: 'dZOhbVOTSpeaaA-wQMgPCA' },
} as const;

export type VideoBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'duRvS1PrT4u6QGJZUmyINA',
  {
    asset: {
      type: 'file';
    };
  }
>;
export const VideoBlock = {
  ID: 'duRvS1PrT4u6QGJZUmyINA',
  REF: { type: 'item_type', id: 'duRvS1PrT4u6QGJZUmyINA' },
} as const;

export type Footer = ItemTypeDefinition<
  EnvironmentSettings,
  'fQVCHtyTTteLT5e1rbXAGg',
  {
    structured_footer: {
      type: 'structured_text';
    };
  }
>;
export const Footer = {
  ID: 'fQVCHtyTTteLT5e1rbXAGg',
  REF: { type: 'item_type', id: 'fQVCHtyTTteLT5e1rbXAGg' },
} as const;

export type SectionBlock = ItemTypeDefinition<
  EnvironmentSettings,
  'fbnjAV5BQaWbojYp-tEtkQ',
  {
    two_colonnes: {
      type: 'boolean';
    };
    structured_text: {
      type: 'structured_text';
      blocks:
        | VideoEmbedBlock
        | ImageGalleryBlock
        | ImageTextBlock
        | IframeBilletterie
        | ButtonBlock
        | ButtonsListBlock
        | SlideshowBlock
        | ItemsListBlock
        | LogosListBlock
        | ImageBlock;
    };
    premiere_colonne: {
      type: 'structured_text';
      blocks: ButtonBlock | ButtonsListBlock | ImageBlock;
    };
    background_color: {
      type: 'color';
    };
    gradient_background: {
      type: 'boolean';
    };
    section_id: {
      type: 'string';
    };
  }
>;
export const SectionBlock = {
  ID: 'fbnjAV5BQaWbojYp-tEtkQ',
  REF: { type: 'item_type', id: 'fbnjAV5BQaWbojYp-tEtkQ' },
} as const;

export type AnyBlock =
  | MenuDropdown
  | VideoEmbedBlock
  | ImageGalleryBlock
  | SideContentBlock
  | ImageTextBlock
  | MenuItem
  | LogoBlock
  | IframeBilletterie
  | OlivBlock
  | ButtonBlock
  | ButtonsListBlock
  | SlideshowBlock
  | ItemsListBlock
  | AgendaBlock
  | LogosListBlock
  | ImageBlock
  | VideoBlock
  | SectionBlock;
export type AnyModel =
  | Page
  | Social
  | Hashtag
  | Agenda
  | Artiste
  | Homepage
  | Navigation
  | Spectacle
  | Member
  | News
  | Footer;
export type AnyBlockOrModel = AnyBlock | AnyModel;
