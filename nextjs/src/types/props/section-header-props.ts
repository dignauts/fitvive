import { BaseComponentProps } from '@/types/props/common-props';
import { RichTextContentType } from '@/types/props/rich-text-props';

export type SectionHeaderProps = {
  chipLabel?: null | string;
  description?: null | string;
  title: RichTextContentType;
}

export type SectionHeaderComponentProps = BaseComponentProps & SectionHeaderProps;
