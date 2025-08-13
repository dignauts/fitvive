'use client';

import { motion, AnimatePresence } from 'motion/react';
import { FC } from 'react';

import ExpandButtonComponent from '@/components/buttons/expand-button-component';
import RichTextComponent from '@/components/main/rich-text-component';
import TypographyComponent from '@/components/main/typography-component';
import { AccordionItemComponentProps } from '@/types/props/accordion-props';
import { cn } from '@/utils/cn-util';

import '@/scss/accordion-item-component.scss';

const AccordionItemComponent: FC<AccordionItemComponentProps> = ({
  answer, className, isExpanded, onExpand, question, testId
}) => (
  <div
    className={cn('accordionItem', {
      additionalClassNames: className,
      modifiers: {
        isExpanded
      }
    })}
    data-testid={testId}
  >
    <div className={cn('accordionItem', { element: 'header' })}>
      <TypographyComponent
        className={cn('accordionItem', { element: 'question' })}
        onClick={onExpand}
        variant='h6'
        weight='semi'
      >
        {question}
      </TypographyComponent>
      <ExpandButtonComponent isExpanded={isExpanded} onExpand={onExpand} />
    </div>
    <AnimatePresence initial={false}>
      {
        isExpanded && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className={cn('accordionItem', { element: 'content' })}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25, ease: 'easeInOut' },
                opacity: { duration: 0.2, ease: 'easeInOut' }
              }
            }}
            initial={{ height: 0, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 3.5,
              mass: 0.8,
              opacity: { duration: 0.35 }
            }}
          >
            <RichTextComponent
              className={cn('accordionItem', { element: 'answer' })}
              variant='caption'
              weight='medium'
            >
              {answer}
            </RichTextComponent>
          </motion.div>
        )
      }
    </AnimatePresence>
  </div>
);

export default AccordionItemComponent;

