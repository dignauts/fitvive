import { Field } from 'payload';

import { PersonField } from '@/fields/person-field';

export const PersonalDataField: Field = {
  admin: {
    position: 'sidebar'
  },
  fields: PersonField,
  name: 'personalData',
  type: 'group'
};
