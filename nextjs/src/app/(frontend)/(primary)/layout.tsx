import { FC, PropsWithChildren } from 'react';

import HeaderComponent from '@/components/main/header-component';
import MainComponent from '@/components/main/main-component';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <HeaderComponent />
    <MainComponent>
      {children}
    </MainComponent>
    <footer>Footer</footer>
  </>
);

export default DefaultLayout;
