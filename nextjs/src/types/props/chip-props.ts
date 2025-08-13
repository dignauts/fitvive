import { ReactNode } from 'react';

import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';
import { TypographyComponentProps } from '@/types/props/typography-props';

export type ChipProps = Partial<Pick<LinkType, 'href'>> & {
  color?: 'default' | 'disabled' | 'primary';
  content: ReactNode;
  size?: 'large' | 'small';
  typographyProps?: Pick<TypographyComponentProps, 'variant' | 'weight'>
}

export type ChipComponentProps = BaseComponentProps & ChipProps;
