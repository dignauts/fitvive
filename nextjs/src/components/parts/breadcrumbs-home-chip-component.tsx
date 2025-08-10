import HomeIconComponent from '@/components/icons/24x24/home-icon-component';
import ChipComponent from '@/components/main/chip-component';
import { ROUTE } from '@/constants/routing-constants';
import { cn } from '@/utils/cn-util';

const BREADCRUMBS_VARIABLE = {
  ICON_SIZE: 20
};

const BreadcrumbsHomeChipComponent = () => (
  <ChipComponent
    className={cn('breadcrumbs', { element: 'item' })}
    color='disabled'
    content={(
      <HomeIconComponent
        height={BREADCRUMBS_VARIABLE.ICON_SIZE}
        width={BREADCRUMBS_VARIABLE.ICON_SIZE}
      />
    )}
    href={ROUTE.HOME}
    size='small'
  />
);

export default BreadcrumbsHomeChipComponent;
