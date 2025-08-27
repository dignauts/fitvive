import HomeIconComponent from '@/components/icons/24x24/home-icon-component';
import ChipComponent from '@/components/main/chip-component';
import { ROUTE } from '@/constants/routing-constants';
import { cn } from '@/utils/cn-util';

const BreadcrumbsHomeChipComponent = () => (
  <ChipComponent
    className={cn('breadcrumbs', { element: 'item' })}
    color='disabled'
    content={<HomeIconComponent className={cn('breadcrumbs', { element: 'icon' })} />}
    href={ROUTE.HOME}
    size='small'
  />
);

export default BreadcrumbsHomeChipComponent;
