import { Field } from 'payload';

import { FaqBlock } from '@/fields/blocks/faq-block';

export const BlocksField: Field = {
  admin: {
    description: 'Build the page layout by adding and arranging predefined content blocks.'
  },
  blocks: [
    FaqBlock
  ],
  name: 'layout',
  type: 'blocks'
};
