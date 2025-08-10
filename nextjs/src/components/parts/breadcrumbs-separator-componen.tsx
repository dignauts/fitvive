import TypographyComponent from '../main/typography-component';

import { cn } from '@/utils/cn-util';

const SEPARATOR: string = '/';

const BreadcrumbsSeparatorComponent = () => (
  <TypographyComponent className={cn('breadcrumbs', { element: 'separator' })} weight='medium'>
    {SEPARATOR}
  </TypographyComponent>
);

export default BreadcrumbsSeparatorComponent;
