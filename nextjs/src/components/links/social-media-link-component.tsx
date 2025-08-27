import { FC } from 'react';

import IconButtonComponent from '@/components/buttons/icon-button-component';
import FacebookIconComponent from '@/components/icons/24x24/facebook-icon-component';
import InstagramIconComponent from '@/components/icons/24x24/instagram-icon-component';
import XIconComponent from '@/components/icons/24x24/x-icon-component';
import { BaseComponentProps } from '@/types/props/common-props';
import { SocialMediaLinkComponentProps, SocialMediaLinkType } from '@/types/props/social-media-link-props';
import { cn } from '@/utils/cn-util';

const icons: Record<SocialMediaLinkType, FC<BaseComponentProps>> = {
  facebook: FacebookIconComponent,
  instagram: InstagramIconComponent,
  x: XIconComponent
} as const;

const SocialMediaLinkComponent: FC<SocialMediaLinkComponentProps> = ({
  className, href, testId, type
}) => {
  const Icon = icons[type];

  return (
    <IconButtonComponent
      className={cn('socialMediaLink', { additionalClassNames: className })}
      linkProps={{
        href,
        isExternal: true
      }}
      testId={testId}
    >
      <Icon />
    </IconButtonComponent>
  );
};

export default SocialMediaLinkComponent;
