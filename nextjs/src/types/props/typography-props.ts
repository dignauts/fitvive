import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export type TypographyComponentType = 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface TypographyComponentProps extends BaseComponentProps {
  children: string;
  color?: 'primary' | 'secondary';
  component?: Omit<TypographyComponentType, 'a'>;
  linkProps?: Omit<LinkType, 'name'>;
  variant?: 'body' | 'h4';
  weight?: 'bold' | 'extra' | 'medium' | 'regular' | 'semi';
}
