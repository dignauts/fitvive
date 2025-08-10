import { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn-util';
import '@/scss/main-component.scss';

const MainComponent: FC<PropsWithChildren> = ({ children }) => (
  <main className={cn('main')}>
    {children}
  </main>
);

export default MainComponent;
