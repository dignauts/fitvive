import { CollectionConfig } from 'payload';

export const ProgramsCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'icon',
      relationTo: 'media',
      required: true,
      type: 'upload'
    },
    {
      name: 'title',
      required: true,
      type: 'text'
    },
    {
      name: 'description',
      required: true,
      type: 'textarea'
    },
    {
      label: 'Internal page',
      name: 'page',
      relationTo: 'pages',
      type: 'relationship'
    }
  ],
  slug: 'programs'
};
