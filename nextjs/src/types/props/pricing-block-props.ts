import { Pricing } from '@/payload-types';
import { BlockComponentProps } from '@/types/props/block-props';
import { BaseComponentProps } from '@/types/props/common-props';

export interface PricingBlockComponentProps
  extends BaseComponentProps, Pick<BlockComponentProps, 'header'> {
  subscriptions?: null | Pricing[];
}
