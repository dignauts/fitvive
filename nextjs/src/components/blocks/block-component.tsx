import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import SectionHeaderComponent from '@/components/headers/section-header-component';
import { BlockComponentProps } from '@/types/props/block-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/block-component.scss';

const cn = createClassNameManager('block');

const BlockComponent: FC<BlockComponentProps> = ({
  children, className, enableMarginBottom, header, position, testId
}) => (
  <BaseBlockComponent
    className={cn({
      additionalClassNames: className,
      modifiers: {
        enableMarginBottom
      }
    })}
    testId={testId}
  >
    <SectionHeaderComponent
      className={cn({ element: 'header' })}
      position={position}
      {...header}
    />
    {children}
  </BaseBlockComponent>
);

export default BlockComponent;
