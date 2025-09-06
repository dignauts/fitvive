import { BaseBlockComponentProps } from '@/types/props/base-block-props';
import { BaseComponentWithChildrenProps } from '@/types/props/common-props';
import { SectionHeaderComponentProps, SectionHeaderProps } from '@/types/props/section-header-props';

export interface BlockComponentProps extends BaseComponentWithChildrenProps,
  Pick<BaseBlockComponentProps, 'outside'>, Pick<SectionHeaderComponentProps, 'position'> {
  enableMarginBottom?: boolean;
  header: SectionHeaderProps;
}
