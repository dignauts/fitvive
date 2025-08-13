import { Block } from 'payload';

import { FaqField } from '@/fields/faq-field';
import { HeaderField } from '@/fields/header-field';

export const FaqBlock: Block = {
  fields: [HeaderField, FaqField],
  labels: {
    plural: 'FAQs',
    singular: 'FAQ'
  },
  slug: 'faq'
};
