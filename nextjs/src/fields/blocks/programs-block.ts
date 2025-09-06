import { Block } from 'payload';

import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { HeaderField } from '@/fields/header-field';

export const ProgramsBlock: Block = {
  fields: [
    HeaderField,
    {
      hasMany: true,
      name: 'programs',
      relationTo: 'programs',
      required: true,
      type: 'relationship'
    }
  ],
  interfaceName: 'ProgramsBlock',
  labels: {
    plural: 'Programs',
    singular: 'Program'
  },
  slug: BLOCK_TYPE.PROGRAMS
};
