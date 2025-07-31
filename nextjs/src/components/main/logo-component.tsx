import { FC } from 'react';

import DumbbellsIconComponent from '@/components/icons/24x24/dumbbells-icon';
import TypographyComponent from '@/components/main/typography-component';
import { COMPANY_NAME } from '@/constants/common-constants';
import { LogoComponentProps } from '@/types/props/logo-props';
import { cn } from '@/utils/cn-util';
import '@/scss/logo-component.scss';

const LogoComponent: FC<LogoComponentProps> = ({ className, linkProps, testId }) => {
  const Component = linkProps?.href ? 'a' : 'div';

  return (
    <Component
      className={cn('logo', { additionalClassNames: className })}
      data-testid={testId}
      {...linkProps && ({
        href: linkProps?.href,
        target: linkProps?.isExternal ? '_blank' : undefined
      })}
    >
      <div className={cn('logo', { element: 'logomark' })}>
        <DumbbellsIconComponent />
      </div>
      <TypographyComponent
        className={cn('logo', { element: 'logotype' })}
        component="span"
        variant='h4'
        weight='bold'
      >
        {COMPANY_NAME}
      </TypographyComponent>
    </Component>
  );
};

export default LogoComponent;
