import { BaseComponentWithChildrenProps } from '@/types/props/common-props';
import { ContainerComponentProps } from '@/types/props/container-props';

export interface BaseBlockComponentProps
  extends BaseComponentWithChildrenProps,
  Pick<ContainerComponentProps, 'maxWidth' | 'withPadding'> {
  paddingY?: 'sm' | 'md' | 'lg' // 32px | 80px | 120px
}
