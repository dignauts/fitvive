import { Field } from 'payload';

export const ContactItemsField: Field = {
  admin: {
    components: {
      RowLabel: {
        path: 'src/components/payload/row-label-component.tsx'
      }
    },
    description: 'List of components for defining contact methods f.e. e-mail address'
  },
  fields: [
    {
      label: 'Label',
      name: 'label',
      required: true,
      type: 'text'
    },
    {
      label: 'Value',
      name: 'value',
      required: true,
      type: 'text'
    },
    {
      label: 'Type',
      name: 'type',
      options: [
        {
          label: 'Clock',
          value: 'clock'
        },
        {
          label: 'Envelope',
          value: 'envelope'
        },
        {
          label: 'Marker',
          value: 'marker'
        },
        {
          label: 'Phone',
          value: 'phone'
        }
      ],
      required: true,
      type: 'select'
    }
  ],
  name: 'contactItems',
  type: 'array'
};
