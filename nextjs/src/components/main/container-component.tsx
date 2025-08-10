import { FC } from 'react';

import { ContainerComponentProps } from '@/types/props/container-props';
import { cn } from '@/utils/cn-util';
import '@/scss/container-component.scss';

const ContainerComponent: FC<ContainerComponentProps> = ({
  children, className, component: Component = 'div',
  maxWidth = 'xl', testId, withPadding = true
}) => (
  <Component
    className={cn('container', {
      additionalClassNames: className,
      modifiers: {
        maxWidth,
        withPadding
      }
    })}
    data-testid={testId}
  >
    {children}
  </Component>
);

export default ContainerComponent;
