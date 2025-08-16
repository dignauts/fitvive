import { ReactNode } from 'react';

import { WithIdentifier } from '@/types/generics-types';

export interface BaseListComponentProps<T extends WithIdentifier<object>> {
  items: T[];
  render: (props: T) => ReactNode;
}
