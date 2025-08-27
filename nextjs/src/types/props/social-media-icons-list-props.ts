import { BaseComponentProps } from '@/types/props/common-props';
import { SocialMediaLinkType } from '@/types/props/social-media-link-props';

export type SocialMediaIconsListComponentProps = BaseComponentProps & {
  [social in SocialMediaLinkType]?: null | string;
}
