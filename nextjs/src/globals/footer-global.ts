import { GlobalConfig } from 'payload';

import { LinkField } from '@/fields/link-field';

export const FooterGlobal: GlobalConfig = {
  fields: [
    {
      admin: {
        description: 'Text displayed above the footer.'
      },
      name: 'motto',
      type: 'richText'
    },
    {
      admin: {
        description: 'Tagline placed below the logo.'
      },
      name: 'catchphrase',
      type: 'textarea'
    },
    {
      admin: {
        components: {
          RowLabel: {
            path: 'src/components/payload/row-label-component.tsx'
          }
        },
        description: 'Defines the quick links displayed in the website footer. Each link can be either an internal page reference or an external URL, along with a display label.'
      },
      fields: LinkField,
      name: 'quickLinks',
      type: 'array'
    }
  ],
  slug: 'footer'
};
