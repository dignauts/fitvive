import { FC } from 'react';

import { IconButtonComponentProps } from '@/types/props/icon-button-props';
import { cn } from '@/utils/cn-util';
import '@/scss/icon-button-component.scss';

const IconButtonComponent: FC<IconButtonComponentProps> = ({
  children, className, color = 'secondary', component = 'button', linkProps,
  size = 'medium', testId, variant = 'contained'
}) => {
  const Component = linkProps ? 'a' : component;

  return (
    <Component
      className={cn('iconButton', {
        additionalClassNames: className,
        modifiers: {
          color,
          isClickable: Component !== 'div',
          size,
          variant
        }
      })}
      data-testid={testId}
      {...linkProps && ({
        href: linkProps?.href,
        target: linkProps?.isExternal ? '_blank' : undefined
      })}
    >
      {children}
    </Component>
  );
};

export default IconButtonComponent;
