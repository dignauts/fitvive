import { FC } from 'react';

import TypographyComponent from '@/components/main/typography-component';
import { LabeledComponentProps } from '@/types/props/labeled-props';
import { cn } from '@/utils/cn-util';
import '@/scss/labeled-component.scss';

const LabeledComponent: FC<LabeledComponentProps> = ({
  children, className, label, testId
}) => (
  <div className={cn('labeled', { additionalClassNames: className })} data-testid={testId}>
    <TypographyComponent
      className={cn('labeled', { element: 'label' })}
      color='secondary'
      variant='h6'
      weight='bold'
    >
      {label}
    </TypographyComponent>
    {children}
  </div>
);

export default LabeledComponent;
