import { BaseComponentWithChildrenProps } from '@/types/props/common-props';

export interface ContainerComponentProps extends BaseComponentWithChildrenProps {
  component?: 'div' | 'main';
  maxWidth?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  withPadding?: boolean;
}
