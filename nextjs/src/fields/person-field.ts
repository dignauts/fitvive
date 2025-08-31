import { Field } from 'payload';

export const PersonField: Field[] = [
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
];
