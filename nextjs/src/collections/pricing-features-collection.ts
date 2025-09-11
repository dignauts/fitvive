import { CollectionConfig } from 'payload';

export const PricingFeaturesCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text'
    }
  ],
  slug: 'pricing-features'
};
