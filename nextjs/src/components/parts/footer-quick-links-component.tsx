import { getTranslations } from 'next-intl/server';

import BaseListComponent from '@/components/lists/base-list-component';
import TypographyComponent from '@/components/main/typography-component';
import { Footer } from '@/payload-types';
import { LinkAPI } from '@/types/api/common-types';
import { cn } from '@/utils/cn-util';
import { getHref } from '@/utils/get-href-util';

const FooterQuickLinksComponent = async ({
  quickLinks
}: Pick<Footer, 'quickLinks'>) => {
  const t = await getTranslations();

  return quickLinks && quickLinks?.length > 0 && (
    <div className={cn('footer', { element: 'quickLinks' })}>
      <TypographyComponent
        capitalize
        variant='h4'
        weight='bold'
      >
        {t('common.quick_links')}
      </TypographyComponent>
      <BaseListComponent<LinkAPI>
        items={quickLinks}
        render={(quickLink) => (
          <TypographyComponent
            component="a"
            linkProps={{
              href: getHref(quickLink),
              isExternal: quickLink.type === 'external'
            }}
            variant='h5'
            weight='medium'
          >
            {quickLink.label}
          </TypographyComponent>
        )}
      />
    </div>
  );
};

export default FooterQuickLinksComponent;
