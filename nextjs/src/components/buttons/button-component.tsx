import { FC } from 'react';

import TypographyComponent from '@/components/main/typography-component';
import { ButtonComponentProps } from '@/types/props/button-props';
import { cn } from '@/utils/cn-util';

import '@/scss/button-component.scss';

const ButtonComponent: FC<ButtonComponentProps> = ({
  children, className, color = 'primary', isDisabled, linkProps,
  size = 'medium', testId, type = 'button', variant = 'contained'
}) => {
  const Component = linkProps ? 'a' : 'button';

  return (
    <Component
      className={cn('button', {
        additionalClassNames: className,
        modifiers: {
          color,
          isDisabled,
          size,
          variant
        }
      })}
      data-testid={testId}
      type={type}
      {...linkProps && ({
        href: linkProps?.href,
        target: linkProps?.isExternal ? '_blank' : undefined
      })}
    >
      <TypographyComponent
        className={cn('button', { element: 'label' })}
        component="span"
        variant='h5'
        weight='bold'
      >
        {children}
      </TypographyComponent>
    </Component>
  );
};

export default ButtonComponent;
