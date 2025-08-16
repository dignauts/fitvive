import { getTranslations } from 'next-intl/server';

import TypographyComponent from '@/components/main/typography-component';
import { COMPANY_NAME } from '@/constants/common-constants';
import { cn } from '@/utils/cn-util';

const currentYear: number = new Date().getFullYear();

const FooterCopyrightComponent = async () => {
  const t = await getTranslations();

  return (
    <TypographyComponent className={cn('footer', { element: 'copyright' })}>
      {t('common.copyright', { companyName: COMPANY_NAME, year: currentYear })}
    </TypographyComponent>
  );
};

export default FooterCopyrightComponent;
