import { FC, PropsWithChildren } from 'react';

import HeaderComponent from '@/components/main/header-component';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <HeaderComponent />
    <main>
      {children}
    </main>
    <footer>Footer</footer>
  </>
);

export default DefaultLayout;
