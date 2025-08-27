import { GlobalConfig } from 'payload';

import { ContactItemsField } from '@/fields/contact-items-field';
import { SocialMediaField } from '@/fields/social-media-field';

export const ContactDetailsGlobal: GlobalConfig = {
  fields: [
    ContactItemsField,
    SocialMediaField
  ],
  slug: 'contact-details'
};
