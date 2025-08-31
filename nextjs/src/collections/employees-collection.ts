import { CollectionConfig } from 'payload';

import { PersonField } from '@/fields/person-field';

export const EmployeesCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'fullName'
  },
  fields: [
    {
      name: 'avatar',
      relationTo: 'media',
      type: 'upload'
    },
    ...PersonField,
    {
      name: 'occupation',
      relationTo: 'occupations',
      required: true,
      type: 'relationship'
    }
  ],
  slug: 'employees'
};
