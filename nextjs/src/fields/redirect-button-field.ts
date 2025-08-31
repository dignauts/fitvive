import { Field } from 'payload';

export const RedirectButtonField: Field = {
  fields: [
    {
      name: 'label',
      type: 'text'
    },
    {
      label: 'Internal page',
      name: 'page',
      relationTo: 'pages',
      type: 'relationship'
    }
  ],
  interfaceName: 'RedirectButton',
  name: 'redirectButton',
  type: 'group'
};
