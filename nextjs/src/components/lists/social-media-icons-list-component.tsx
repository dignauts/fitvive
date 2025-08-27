import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

import SocialMediaLinkComponent from '@/components/links/social-media-link-component';
import TypographyComponent from '@/components/main/typography-component';
import { SocialMediaIconsListComponentProps } from '@/types/props/social-media-icons-list-props';
import { cn } from '@/utils/cn-util';
import '@/scss/social-media-icons-list-component.scss';

const SocialMediaIconsListComponent: FC<SocialMediaIconsListComponentProps> = async ({
  className, facebook, instagram, testId, x
}) => {
  const t = await getTranslations();

  return (facebook || instagram || x) && (
    <div className={cn('socialMediaIconsList', { additionalClassNames: className })} data-testid={testId}>
      <TypographyComponent
        color='secondary'
        variant='h6'
        weight='bold'
      >
        {`${t('common.follow_us')}:`}
      </TypographyComponent>
      {facebook && <SocialMediaLinkComponent href={facebook} type='facebook' />}
      {instagram && <SocialMediaLinkComponent href={instagram} type='instagram' />}
      {x && <SocialMediaLinkComponent href={x} type='x' />}
    </div>
  );
};

export default SocialMediaIconsListComponent;
