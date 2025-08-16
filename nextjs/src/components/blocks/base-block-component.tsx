import { FC } from 'react';

import ContainerComponent from '@/components/main/container-component';
import { BaseBlockComponentProps } from '@/types/props/base-block-props';
import { cn } from '@/utils/cn-util';
import '@/scss/base-block-component.scss';

const BaseBlockComponent: FC<BaseBlockComponentProps> = ({
  children, className, component: Component = 'section',
  maxWidth, paddingY = 'md', testId, withPadding
}) => (
  <Component
    className={cn('baseBlock', {
      additionalClassNames: className,
      modifiers: {
        paddingY
      }
    })}
    data-testid={testId}
  >
    <ContainerComponent
      className={cn('baseBlock', { element: 'container' })}
      maxWidth={maxWidth}
      withPadding={withPadding}
    >
      {children}
    </ContainerComponent>
  </Component>
);

export default BaseBlockComponent;
