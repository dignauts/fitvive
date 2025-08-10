import { FC } from 'react';

import TypographyComponent from '@/components/main/typography-component';
import { ChipComponentProps } from '@/types/props/chip-props';
import { cn } from '@/utils/cn-util';

import '@/scss/chip-component.scss';

const ChipComponent: FC<ChipComponentProps> = ({
  className, color = 'default', content, href, size = 'large', testId
}) => {
  const Component = href ? 'a' : 'div';

  return (
    <Component
      className={cn('chip', {
        additionalClassNames: className,
        modifiers: {
          color,
          link: !!href,
          size
        }
      })}
      data-testid={testId}
      {...href && ({
        href
      })}
    >
      <TypographyComponent
        className={cn('chip', { element: 'label' })}
        component="span"
        weight='medium'
      >
        {content}
      </TypographyComponent>
    </Component>
  );
};

export default ChipComponent;
