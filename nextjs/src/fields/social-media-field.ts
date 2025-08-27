import { Field } from 'payload';

export const SocialMediaField: Field = {
  fields: [
    {
      label: 'Facebook',
      name: 'facebook',
      type: 'text'
    },
    {
      label: 'Instagram',
      name: 'instagram',
      type: 'text'
    },
    {
      label: 'X (formerly Twitter)',
      name: 'x',
      type: 'text'
    }
  ],
  name: 'socialMedia',
  type: 'group'
};
