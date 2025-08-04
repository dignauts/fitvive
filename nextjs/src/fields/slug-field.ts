import { Field } from 'payload';
import slug from 'slug';

export const SlugField = (source: string = 'pageTitle'): Field => ({
  admin: {
    description: 'The URL-friendly identifier for this page. Example: "about-us" → fitvive.com/about-us',
    position: 'sidebar'
  },
  name: 'slug',
  label: 'URL',
  type: 'text',
  required: true,
  unique: true,
  hooks: {
    beforeValidate: [
      ({ value, siblingData, operation }) => {
        if (operation === 'create' && (!value || value.trim() === '') && siblingData?.[source]) {
          return slug(siblingData[source]);
        }

        return value;
      }
    ]
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (value: any) => {
    if (typeof value !== 'string') return 'Slug must be a string';
    const normalized = slug(value);

    if (['admin'].includes(normalized)) {
      return 'This slug is reserved and cannot be used.';
    }

    return true;
  }
});
