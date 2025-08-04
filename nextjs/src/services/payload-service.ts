import { getPayload } from 'payload';

import payloadConfig from '@/payload.config';

export const payloadService = async () => {
  const config = await payloadConfig;
  const payload = await getPayload({ config });

  return payload;
};
