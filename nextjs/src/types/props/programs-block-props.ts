import { Program } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';
import { BlockComponentProps } from '@/types/props/block-props';
import { BaseComponentProps } from '@/types/props/common-props';

export interface ProgramsBlockComponentProps
  extends BaseComponentProps, Pick<BlockComponentProps, 'header'> {
  programs?: WithIdentifier<Program>[];
}
