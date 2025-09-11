import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { HeaderField } from '@/fields/header-field';

export const SubscriptionBlock: Block = {
  fields: [
    HeaderField,
    {
      hasMany: true,
      name: 'subscriptions',
      relationTo: 'pricing',
      type: 'relationship'
    }
  ],
  labels: {
    plural: 'Subscriptions',
    singular: 'Subscription'
  },
  slug: BLOCK_TYPE.SUBSCRIPTION
};
