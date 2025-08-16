import BaseBlockComponent from '@/components/blocks/base-block-component';
import FooterCompanyComponent from '@/components/parts/footer-company-component';
import FooterCopyrightComponent from '@/components/parts/footer-copyright-component';
import FooterMottoComponent from '@/components/parts/footer-motto-component';
import FooterQuickLinksComponent from '@/components/parts/footer-quick-links-component';
import { getFooter } from '@/services/get/get-footer';
import { cn } from '@/utils/cn-util';

import '@/scss/footer-component.scss';

const FooterComponent = async () => {
  const footer = await getFooter();

  return footer && (
    <BaseBlockComponent
      className={cn('footer', {
        modifiers: {
          withMotto: !!footer.motto
        }
      })}
      component='footer'
      paddingY='sm'
    >
      <FooterMottoComponent motto={footer.motto} />
      <div className={cn('footer', { element: 'content' })}>
        <FooterCompanyComponent catchphrase={footer.catchphrase} />
        <FooterQuickLinksComponent quickLinks={footer.quickLinks} />
      </div>
      <div className={cn('footer', { element: 'bottom' })}>
        <FooterCopyrightComponent />
      </div>
    </BaseBlockComponent>
  );
};

export default FooterComponent;
