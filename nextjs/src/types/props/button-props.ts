import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface ButtonComponentProps extends BaseComponentProps {
  children: string;
  color?: 'primary';
  isDisabled?: boolean;
  linkProps?: Omit<LinkType, 'name'>;
  size?: 'medium';
  type?: 'submit' | 'reset' | 'button';
  variant?: 'contained';
}
