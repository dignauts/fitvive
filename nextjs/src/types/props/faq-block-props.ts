import { AccordionItemProps } from '@/types/props/accordion-props';
import { BaseComponentProps } from '@/types/props/common-props';
import { SectionHeaderProps } from '@/types/props/section-header-props';

export interface FaqBlockComponentProps extends Omit<BaseComponentProps, 'className'> {
  header: SectionHeaderProps
  faq?: null | AccordionItemProps[];
}
