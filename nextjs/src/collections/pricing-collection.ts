import { CollectionConfig } from 'payload';

export const PricingCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      defaultValue: false,
      label: 'Mark this plan as featured',
      name: 'isRecommended',
      type: 'checkbox'
    },
    {
      admin: {
        position: 'sidebar'
      },
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
      admin: {
        position: 'sidebar'
      },
      fields: [
        {
          name: 'monthly',
          required: true,
          type: 'number'
        },
        {
          name: 'yearly',
          required: true,
          type: 'number'
        }
      ],
      name: 'prices',
      required: true,
      type: 'group'
    },
    {
      hasMany: true,
      name: 'features',
      relationTo: 'pricing-features',
      required: true,
      type: 'relationship'
    }
  ],
  slug: 'pricing'
};
