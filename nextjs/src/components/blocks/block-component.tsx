import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import SectionHeaderComponent from '@/components/headers/section-header-component';
import { BlockComponentProps } from '@/types/props/block-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/block-component.scss';

const cn = createClassNameManager('block');

const BlockComponent: FC<BlockComponentProps> = ({
  children, className, enableMarginBottom, header, outside, position, testId, titleProps
}) => (
  <BaseBlockComponent
    className={cn({
      additionalClassNames: className,
      modifiers: {
        enableMarginBottom
      }
    })}
    outside={outside}
    testId={testId}
  >
    <SectionHeaderComponent
      className={cn({ element: 'header' })}
      position={position}
      {...header}
      titleProps={titleProps}
    />
    {children}
  </BaseBlockComponent>
);

export default BlockComponent;
