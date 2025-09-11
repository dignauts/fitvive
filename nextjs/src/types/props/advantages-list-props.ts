import { Pricing } from '@/payload-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface AdvantagesListComponentProps
  extends BaseComponentProps, Pick<Pricing, 'features'> {

}
