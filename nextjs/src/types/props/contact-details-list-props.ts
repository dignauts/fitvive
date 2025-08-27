import { BaseComponentProps } from '@/types/props/common-props';
import { ContactItemProps } from '@/types/props/contact-item-props';

export interface ContactDetailsListComponentProps
  extends BaseComponentProps {
  items?: null | ContactItemProps[];
}
