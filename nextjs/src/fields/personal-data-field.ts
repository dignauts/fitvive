import { Field } from 'payload';

export const PersonalDataField: Field = {
  admin: {
    position: 'sidebar'
  },
  fields: [
    {
      label: 'Full name',
      name: 'fullName',
      required: true,
      type: 'text'
    },
    {
      label: 'E-mail address',
      name: 'email',
      required: true,
      type: 'text'
    },
    {
      label: 'Phone number',
      name: 'phoneNumber',
      required: true,
      type: 'text'
    }
  ],
  name: 'personalData',
  type: 'group'
};
