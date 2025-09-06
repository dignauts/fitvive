import { Program } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface ProgramsListComponentProps
  extends BaseComponentProps {
  items?: WithIdentifier<Program>[];
}
