import { QuickNew } from '@/payload-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface QuickNewsMarqueeComponentProps extends BaseComponentProps {
  quickNews: Array<QuickNew>;
}
