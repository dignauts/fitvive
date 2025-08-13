import { WithIdentifier } from '@/types/generics-types';
import { BaseComponentProps } from '@/types/props/common-props';
import { RichTextContentType } from '@/types/props/rich-text-props';

export type AccordionItemProps = WithIdentifier<{
  answer: RichTextContentType;
  question: string;
}>;

export interface AccordionComponentProps
  extends BaseComponentProps {
  items: AccordionItemProps[];
}

export interface AccordionItemComponentProps
  extends BaseComponentProps, AccordionItemProps {
  isExpanded?: boolean;
  onExpand?: () => void;
}
