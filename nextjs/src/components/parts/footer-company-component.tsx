import LogoComponent from '@/components/main/logo-component';
import TypographyComponent from '@/components/main/typography-component';
import { Footer } from '@/payload-types';
import { cn } from '@/utils/cn-util';

const FooterCompanyComponent = ({ catchphrase }: Pick<Footer, 'catchphrase'>) => (
  <div className={cn('footer', { element: 'company' })}>
    <LogoComponent />
    {catchphrase && (
      <TypographyComponent className={cn('footer', { element: 'catchphrase' })} withWhitespace>
        {catchphrase}
      </TypographyComponent>
    )}
  </div>
);

export default FooterCompanyComponent;
