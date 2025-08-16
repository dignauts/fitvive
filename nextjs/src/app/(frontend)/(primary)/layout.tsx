import { FC, PropsWithChildren } from 'react';

import FooterComponent from '@/components/footers/footer-component';
import HeaderComponent from '@/components/headers/header-component';
import MainComponent from '@/components/main/main-component';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <HeaderComponent />
    <MainComponent>
      {children}
    </MainComponent>
    <FooterComponent />
  </>
);

export default DefaultLayout;
