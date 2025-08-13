import { SerializedEditorState } from 'node_modules/lexical/LexicalEditorState';

import { BaseComponentProps } from '@/types/props/common-props';
import { TypographyComponentProps } from '@/types/props/typography-props';

export type RichTextContentType = SerializedEditorState;

export interface RichTextComponentProps
  extends BaseComponentProps, Pick<TypographyComponentProps, 'variant' | 'weight'> {
  children: RichTextContentType;
  color?: 'highlighted';
}
