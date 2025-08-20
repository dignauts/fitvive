import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import AccordionComponent from '@/components/main/accordion-component';
import { FaqBlockComponentProps } from '@/types/props/faq-block-props';
import { cn } from '@/utils/cn-util';

import '@/scss/faq-block-component.scss';

const FaqBlockComponent: FC<FaqBlockComponentProps> = ({
  faq, header, testId
}) => (
  <BlockComponent
    className={cn('faqBlock')}
    header={header}
    testId={testId}
  >
    {faq && (
      <AccordionComponent className={cn('faqBlock', { element: 'questions' })} items={faq} />
    )}
  </BlockComponent>
);

export default FaqBlockComponent;
