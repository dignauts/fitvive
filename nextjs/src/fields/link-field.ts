import { Field, Validate } from 'payload';

const validateExternalLink: Validate = (value, { siblingData }) => {
  if (siblingData?.type === 'external') {
    if (typeof value !== 'string' || !/^https?:\/\//.test(value)) {
      return 'External URL must start with http:// or https://';
    }
  }

  return true;
};

export const LinkField: Field[] = [
  {
    admin: {
      description: 'The text that will appear as the clickable label for this link.'
    },
    name: 'label',
    label: 'Label',
    type: 'text',
    required: true
  },
  {
    admin: {
      description: 'Select whether this link points to an internal page or an external website.',
      layout: 'horizontal'
    },
    name: 'type',
    label: 'Type',
    type: 'radio',
    required: true,
    options: [
      { label: 'Internal Page', value: 'internal' },
      { label: 'External URL', value: 'external' }
    ],
    defaultValue: 'internal'
  },
  {
    name: 'internalLink',
    label: 'Internal Page',
    type: 'relationship',
    relationTo: 'pages',
    required: true,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'internal'
    }
  },
  {
    name: 'externalLink',
    label: 'External URL',
    type: 'text',
    required: true,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'external',
      description: 'Full external URL, e.g. https://example.com'
    },
    validate: validateExternalLink
  }
];
