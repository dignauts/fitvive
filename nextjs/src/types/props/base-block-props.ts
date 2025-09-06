import { ChildrenType } from '@/types/common-types';
import { BaseComponentWithChildrenProps } from '@/types/props/common-props';
import { ContainerComponentProps } from '@/types/props/container-props';

export interface BaseBlockComponentProps
  extends BaseComponentWithChildrenProps,
  Pick<ContainerComponentProps, 'maxWidth' | 'withPadding'> {
  color?: 'primary' | 'secondary';
  component?: 'footer' | 'section';
  outside?: ChildrenType;
  paddingY?: 'xsm' | 'sm' | 'md' | 'lg' // 16px | 32px | 80px | 120px
}
