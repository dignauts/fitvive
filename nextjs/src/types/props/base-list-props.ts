import { ReactNode } from 'react';

import { WithIdentifier } from '@/types/generics-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface BaseListComponentProps<T extends WithIdentifier<object>>
  extends BaseComponentProps {
  items: T[];
  render: (props: T) => ReactNode;
}
