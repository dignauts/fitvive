import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { HeaderField } from '@/fields/header-field';
import { RedirectButtonField } from '@/fields/redirect-button-field';

export const EmployeesBlock: Block = {
  fields: [
    HeaderField,
    {
      hasMany: true,
      name: 'employees',
      relationTo: 'employees',
      type: 'relationship'
    },
    RedirectButtonField
  ],
  labels: {
    plural: 'Employees Blocks',
    singular: 'Employees Block'
  },
  slug: BLOCK_TYPE.EMPLOYEES
};
