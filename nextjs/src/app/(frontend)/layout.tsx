import { Outfit } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { FC, PropsWithChildren } from 'react';

import ToastProvider from '@/components/providers/toast-provider';
import { COMPANY_NAME } from '@/constants/common-constants';
import '@/scss/globals.scss';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: COMPANY_NAME
};

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  variable: '--dgn-font-outfit'
});

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={outfit.variable}>
        <NextIntlClientProvider>
          {children}
          <ToastProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
