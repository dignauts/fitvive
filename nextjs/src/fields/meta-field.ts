import { Field } from 'payload';

export const MetaField: Field = {
  admin: {
    description: 'Manage metadata for search engines and social media sharing.',
    position: 'sidebar'
  },
  fields: [
    {
      admin: {
        description:
          'Displayed as the page title in search engine results and browser tabs. Keep it clear, relevant, and under ~60 characters.'
      },
      name: 'title',
      label: 'Title',
      type: 'text',
      maxLength: 60
    },
    {
      admin: {
        description:
          'A short summary of the page shown below the title in search results. Aim to attract clicks. Recommended length: up to ~160 characters.',
        rows: 3
      },
      name: 'description',
      label: 'Description',
      type: 'textarea',
      maxLength: 160
    },
    {
      admin: {
        description:
          'Image used when sharing the page on social platforms like Facebook or LinkedIn. Recommended size: 1200×630px.'
      },
      name: 'thumbnail',
      label: 'Thumbnail (Open Graph)',
      type: 'upload',
      relationTo: 'media'
    },
    {
      admin: {
        description:
          'Optional. Comma-separated keywords relevant to the page (e.g. “web development, react, e-commerce”).',
        placeholder: 'e.g. web development, react, SEO'
      },
      name: 'keywords',
      label: 'Keywords',
      type: 'text'
    }
  ],
  label: 'Meta',
  name: 'meta',
  type: 'group'
};
