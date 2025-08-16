import { FC } from 'react';

import { TypographyComponentProps, TypographyComponentType } from '@/types/props/typography-props';
import { cn } from '@/utils/cn-util';
import '@/scss/typography-component.scss';

const TypographyComponent: FC<TypographyComponentProps> = ({
  capitalize, children, className, color = 'primary', component = 'p',
  linkProps, onClick, variant = 'body', weight = 'regular', withWhitespace
}) => {
  const Component = (linkProps?.href ? 'a' : component) as TypographyComponentType;

  return (
    <Component
      className={cn('typography', {
        additionalClassNames: className,
        modifiers: {
          capitalize,
          color,
          link: !!linkProps?.href,
          variant,
          weight,
          withWhitespace
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
