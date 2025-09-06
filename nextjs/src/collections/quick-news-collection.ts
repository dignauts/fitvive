import { CollectionConfig } from 'payload';

import { LinkField } from '@/fields/link-field';

export const QuickNewsCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'label'
  },
  fields: [
    ...LinkField
  ],
  slug: 'quick-news'
};
