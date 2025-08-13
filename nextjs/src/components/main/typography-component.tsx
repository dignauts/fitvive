import { FC } from 'react';

import { TypographyComponentProps, TypographyComponentType } from '@/types/props/typography-props';
import { cn } from '@/utils/cn-util';
import '@/scss/typography-component.scss';

const TypographyComponent: FC<TypographyComponentProps> = ({
  children, className, color = 'primary', component = 'p',
  linkProps, onClick, variant = 'body', weight = 'regular'
}) => {
  const Component = (linkProps?.href ? 'a' : component) as TypographyComponentType;

  return (
    <Component
      className={cn('typography', {
        additionalClassNames: className,
        modifiers: {
          color,
          variant,
          weight
        }
      })}
      onClick={onClick}
      {...linkProps && ({
        href: linkProps?.href,
        target: linkProps?.isExternal ? '_blank' : undefined
      })}
    >
      {children}
    </Component>
  );
};

export default TypographyComponent;
