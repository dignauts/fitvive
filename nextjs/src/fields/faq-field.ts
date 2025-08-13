import { Field } from 'payload';

export const FaqField: Field = {
  fields: [
    {
      name: 'question',
      required: true,
      type: 'text'
    },
    {
      name: 'answer',
      required: true,
      type: 'richText'
    }
  ],
  name: 'faq',
  type: 'array'
};
