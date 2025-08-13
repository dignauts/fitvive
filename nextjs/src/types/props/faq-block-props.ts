import { AccordionItemProps } from '@/types/props/accordion-props';
import { BaseComponentProps } from '@/types/props/common-props';
import { SectionHeaderProps } from '@/types/props/section-header-props';

export interface FaqBlockComponentProps extends BaseComponentProps {
  header: SectionHeaderProps
  faq?: null | AccordionItemProps[];
}
