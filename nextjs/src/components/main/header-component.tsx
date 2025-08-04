import ContainerComponent from '@/components/main/container-component';
import LogoComponent from '@/components/main/logo-component';
import { ROUTE } from '@/constants/routing-constants';
import { cn } from '@/utils/cn-util';
import '@/scss/header-component.scss';

const HeaderComponent = () => (
  <header className={cn('header')}>
    <ContainerComponent className={cn('header', { element: 'container' })} withPadding={false}>
      <LogoComponent linkProps={{ href: ROUTE.HOME }} />
    </ContainerComponent>
  </header>
);

export default HeaderComponent;
