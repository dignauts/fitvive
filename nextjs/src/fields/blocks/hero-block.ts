import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { HeaderField } from '@/fields/header-field';
import { LinkField } from '@/fields/link-field';

export const HeroBlock: Block = {
  fields: [
    HeaderField,
    {
      name: 'links',
      maxRows: 2,
      fields: LinkField,
      type: 'array'
    },
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload'
    }
  ],
  labels: {
    plural: 'Heros',
    singular: 'Hero'
  },
  slug: BLOCK_TYPE.HERO
};
