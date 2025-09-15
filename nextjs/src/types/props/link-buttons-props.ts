import { LinkAPI } from '@/types/api/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface LinkButtonsComponentProps extends BaseComponentProps {
  links?: LinkAPI[];
  position?: 'center' | 'left' | 'right';
}
