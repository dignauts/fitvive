import { Field } from 'payload';

import { ContactFormBlock } from '@/fields/blocks/contact-form-block';
import { FaqBlock } from '@/fields/blocks/faq-block';

export const BlocksField: Field = {
  admin: {
    description: 'Build the page layout by adding and arranging predefined content blocks.'
  },
  blocks: [
    ContactFormBlock, FaqBlock
  ],
  name: 'layout',
  type: 'blocks'
};
