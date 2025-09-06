import { ReactNode } from 'react';

import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface IconButtonComponentProps extends BaseComponentProps {
  children: ReactNode;
  color?: 'neutral' | 'primary' | 'secondary';
  component?: 'button' | 'div';
  linkProps?: Omit<LinkType, 'name'>
  size?: 'medium';
  variant?: 'contained';
}
