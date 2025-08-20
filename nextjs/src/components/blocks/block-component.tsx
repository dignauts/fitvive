import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import SectionHeaderComponent from '@/components/headers/section-header-component';
import { BlockComponentProps } from '@/types/props/block-props';
import { cn } from '@/utils/cn-util';

const BlockComponent: FC<BlockComponentProps> = ({ children, className, header, testId }) => (
  <BaseBlockComponent
    className={cn('block', {
      additionalClassNames: className
    })}
    testId={testId}
  >
    <SectionHeaderComponent className={cn('block', { element: 'header' })} {...header} />
    {children}
  </BaseBlockComponent>
);

export default BlockComponent;
