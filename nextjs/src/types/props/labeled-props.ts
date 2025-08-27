import { ReactNode } from 'react';

import { BaseComponentProps } from '@/types/props/common-props';

export interface LabeledComponentProps extends BaseComponentProps {
  children: ReactNode;
  label: string;
}
