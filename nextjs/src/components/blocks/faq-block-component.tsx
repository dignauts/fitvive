'use client';

import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import SectionHeaderComponent from '@/components/headers/section-header-component';
import AccordionComponent from '@/components/main/accordion-component';
import { FaqBlockComponentProps } from '@/types/props/faq-block-props';
import { cn } from '@/utils/cn-util';

import '@/scss/faq-block-component.scss';

const FaqBlockComponent: FC<FaqBlockComponentProps> = ({
  className, faq, header, testId
}) => (
  <BaseBlockComponent
    className={cn('faqBlock', {
      additionalClassNames: className
    })}
    testId={testId}
  >
    <SectionHeaderComponent className={cn('faqBlock', { element: 'header' })} {...header} />
    {faq && (
      <AccordionComponent className={cn('faqBlock', { element: 'questions' })} items={faq} />
    )}
  </BaseBlockComponent>
);

export default FaqBlockComponent;
