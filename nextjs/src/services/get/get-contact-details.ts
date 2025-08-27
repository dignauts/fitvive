import { cache } from 'react';

import { payloadService } from '@/services/payload-service';

export const getContactDetails = cache(async () => {
  try {
    const payload = await payloadService();
    const global = await payload.findGlobal({
      slug: 'contact-details'
    });

    return global || null;
  } catch (error) {
    console.error(error);

    return null;
  }
});
