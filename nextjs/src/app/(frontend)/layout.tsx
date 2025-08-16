import { Outfit } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { FC, PropsWithChildren } from 'react';

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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
