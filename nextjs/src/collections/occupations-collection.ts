import { CollectionConfig } from 'payload';

export const OccupationsCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      required: true,
      type: 'text'
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea'
    }
  ],
  slug: 'occupations'
};
