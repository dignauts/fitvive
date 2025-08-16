import { getRequestConfig } from 'next-intl/server';

const LOCALE: string = 'en';

export default getRequestConfig(async () => ({
  locale: LOCALE,
  messages: (await import(`../../messages/${LOCALE}.json`)).default
}));
