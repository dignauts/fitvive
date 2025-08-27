import { ReactNode } from 'react';

import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export type TypographyComponentType = 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';

export type TypographyVariantType = 'body' | 'caption' | 'd2' | 'h1' | 'h2' | 'h4' | 'h5' | 'h6';

export interface TypographyComponentProps extends BaseComponentProps {
  children: ReactNode;
  capitalize?: boolean;
  color?: 'primary' | 'secondary';
  component?: Omit<TypographyComponentType, 'a'>;
  labelProps?: {
    htmlFor?: string | undefined;
  }
  linkProps?: Omit<LinkType, 'name'>;
  onClick?: () => void;
  variant?: TypographyVariantType;
  weight?: 'bold' | 'extra' | 'medium' | 'regular' | 'semi';
  withWhitespace?: boolean;
}
