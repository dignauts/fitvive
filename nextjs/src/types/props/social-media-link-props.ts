import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export type SocialMediaLinkType = 'facebook' | 'instagram' | 'x';

export interface SocialMediaLinkComponentProps
  extends BaseComponentProps, Pick<LinkType, 'href'> {
  type: SocialMediaLinkType;
}
