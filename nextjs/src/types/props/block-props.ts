import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types/props/common-props';
import { SectionHeaderProps } from '@/types/props/section-header-props';

export interface BlockComponentProps extends BaseComponentProps {
  children: ReactNode | ReactNode[];
  header: SectionHeaderProps;
}
