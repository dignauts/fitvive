import { FC, PropsWithChildren } from 'react';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
