import { BaseComponentProps } from '@/types/props/common-props';
import { SectionHeaderProps } from '@/types/props/section-header-props';

export interface ContactBlockComponentProps extends Omit<BaseComponentProps, 'className'> {
  header: SectionHeaderProps
  isContactDetailsEnabled?: boolean | null;
}
