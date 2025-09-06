import { Field } from 'payload';

import { ContactFormBlock } from '@/fields/blocks/contact-form-block';
import { EmployeesBlock } from '@/fields/blocks/employees-block';
import { FaqBlock } from '@/fields/blocks/faq-block';
import { ProgramsBlock } from '@/fields/blocks/programs-block';
import { QuickNewsBlock } from '@/fields/blocks/quick-news-block';

export const BlocksField: Field = {
  admin: {
    description: 'Build the page layout by adding and arranging predefined content blocks.'
  },
  blocks: [
    ContactFormBlock,
    EmployeesBlock,
    FaqBlock,
    ProgramsBlock,
    QuickNewsBlock
  ],
  name: 'layout',
  type: 'blocks'
};
