import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';

export const QuickNewsBlock: Block = {
  fields: [
    {
      hasMany: true,
      name: 'quickNews',
      relationTo: 'quick-news',
      required: true,
      type: 'relationship'
    }
  ],
  labels: {
    plural: 'Quick News Marquees',
    singular: 'Quick News Marquee'
  },
  slug: BLOCK_TYPE.QUICK_NEWS_MARQUEE
};
