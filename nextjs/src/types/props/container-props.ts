import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types/props/common-props';

export interface ContainerComponentProps extends BaseComponentProps {
  children: ReactNode | ReactNode[];
  component?: 'div' | 'main';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  withPadding?: boolean;
}
