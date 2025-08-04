import { CollectionConfig } from 'payload';

import { MetaField } from '@/fields/meta-field';
import { SlugField } from '@/fields/slug-field';

export const PagesCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'pageTitle'
  },
  fields: [
    SlugField(),
    MetaField,
    {
      admin: {
        description: 'The main title of the page, typically used in the H1 heading and for identifying the page content.',
        placeholder: 'e.g. About Us, Contact, Services'
      },
      label: 'Page title',
      name: 'pageTitle',
      required: true,
      type: 'text'
    }
  ],
  slug: 'pages'
};
