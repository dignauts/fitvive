import { Field } from 'payload';

export const BreadcrumbsField: Field = {
  admin: {
    description: 'Enabling this option displays breadcrumbs on the page.',
    position: 'sidebar'
  },
  defaultValue: false,
  label: 'Show breadcrumbs',
  name: 'isBreadcrumbsVisible',
  type: 'checkbox'
};
