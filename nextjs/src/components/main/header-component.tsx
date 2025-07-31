import LogoComponent from '@/components/main/logo-component';
import { ROUTE } from '@/constants/routing-constants';

const HeaderComponent = () => (
  <header>
    <LogoComponent linkProps={{ href: ROUTE.HOME }} />
  </header>
);

export default HeaderComponent;
