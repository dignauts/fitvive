import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types/props/common-props';
import { SectionHeaderComponentProps, SectionHeaderProps } from '@/types/props/section-header-props';

export interface BlockComponentProps
  extends BaseComponentProps, Pick<SectionHeaderComponentProps, 'position'> {
  children: ReactNode | ReactNode[];
  enableMarginBottom?: boolean;
  header: SectionHeaderProps;
}
