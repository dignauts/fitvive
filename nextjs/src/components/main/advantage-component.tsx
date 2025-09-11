import { FC } from 'react';

import AdvantageIconComponent from '@/components/icons/24x24/advantage-icon-component';
import TypographyComponent from '@/components/main/typography-component';
import { AdvantageComponentProps } from '@/types/props/advantage-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/advantage-component.scss';

const cn = createClassNameManager('advantage');

const AdvantageComponent: FC<AdvantageComponentProps> = ({
  children, className, testId
}) => (
  <div className={cn({ additionalClassNames: className })} data-testid={testId}>
    <AdvantageIconComponent className={cn({ element: 'icon' })} />
    <TypographyComponent
      className={cn({ element: 'text' })}
      variant='h6'
      weight='medium'
    >
      {children}
    </TypographyComponent>
  </div>
);

export default AdvantageComponent;
