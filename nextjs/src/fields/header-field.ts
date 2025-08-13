import { Field } from 'payload';

export const HeaderField: Field = {
  fields: [
    {
      label: 'Label',
      name: 'chipLabel',
      type: 'text'
    },
    {
      name: 'title',
      required: true,
      type: 'richText'
    },
    {
      name: 'description',
      type: 'textarea'
    }
  ],
  name: 'header',
  type: 'group'
};
