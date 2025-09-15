import { Media } from '@/payload-types';
import { LinkAPI } from '@/types/api/common-types';
import { BlockComponentProps } from '@/types/props/block-props';
import { BaseComponentProps } from '@/types/props/common-props';

export interface HeroBlockComponentProps
  extends BaseComponentProps, Pick<BlockComponentProps, 'header'> {
  image?: number | Media;
  links?: LinkAPI[];
}
