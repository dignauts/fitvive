import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import QuickNewsMarqueeComponent from '@/components/marquees/quick-news-marquee-component';
import { QuickNewsMarqueeComponentProps } from '@/types/props/quick-news-marquee-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('quickNewsMarqueeBlock');

const QuickNewsMarqueeBlockComponent: FC<QuickNewsMarqueeComponentProps> = ({
  className, testId, quickNews
}) => (
  <BaseBlockComponent
    className={cn({ additionalClassNames: className })}
    color='primary'
    maxWidth='full'
    paddingY='xsm'
    testId={testId}
    withPadding={false}
  >
    <QuickNewsMarqueeComponent quickNews={quickNews} />
  </BaseBlockComponent>
);

export default QuickNewsMarqueeBlockComponent;
