import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { HeaderField } from '@/fields/header-field';

export const ContactFormBlock: Block = {
  fields: [
    HeaderField,
    {
      defaultValue: false,
      label: 'Show contact details',
      name: 'isContactDetailsEnabled',
      type: 'checkbox'
    }
  ],
  labels: {
    plural: 'Contact Forms',
    singular: 'Contact Form'
  },
  slug: BLOCK_TYPE.CONTACT_FORM
};
