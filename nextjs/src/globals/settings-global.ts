import { GlobalConfig } from 'payload';

import { LinkField } from '@/fields/link-field';

export const SettingsGlobal: GlobalConfig = {
  fields: [
    {
      admin: {
        components: {
          RowLabel: {
            path: 'src/components/payload/row-label-component.tsx'
          }
        },
        description: 'Defines the main navigation links displayed in the website header. Each link can be either an internal page reference or an external URL, along with a display label.'
      },
      fields: LinkField,
      name: 'primaryNavigation',
      type: 'array'
    }
  ],
  slug: 'settings'
};
