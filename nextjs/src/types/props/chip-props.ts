import { ReactNode } from 'react';

import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export type ChipProps = Partial<Pick<LinkType, 'href'>> & {
  color?: 'default' | 'disabled';
  content: ReactNode;
  size?: 'large' | 'small';
}

export type ChipComponentProps = BaseComponentProps & ChipProps;
