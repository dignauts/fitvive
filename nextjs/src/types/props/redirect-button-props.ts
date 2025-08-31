import { LinkType } from '@/types/common-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface RedirectButtonComponentProps
  extends BaseComponentProps, Pick<LinkType, 'href'> {
  name?: null | string;
}
