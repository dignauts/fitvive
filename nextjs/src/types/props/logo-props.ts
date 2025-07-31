import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface LogoComponentProps extends BaseComponentProps {
  linkProps?: Omit<LinkType, 'name'>
}
