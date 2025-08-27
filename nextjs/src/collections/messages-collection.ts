import { CollectionConfig } from 'payload';

import { PersonalDataField } from '@/fields/personal-data-field';

export const MessagesCollection: CollectionConfig = {
  access: {
    create: () => false,
    update: () => false
  },
  admin: {
    useAsTitle: 'subject'
  },
  fields: [
    PersonalDataField,
    {
      label: 'Subject',
      name: 'subject',
      required: true,
      type: 'text'
    },
    {
      label: 'Message',
      name: 'message',
      required: true,
      type: 'textarea'
    }
  ],
  slug: 'messages'
};
