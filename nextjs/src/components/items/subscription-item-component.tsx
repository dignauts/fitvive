import { FC } from 'react';

import AdvantagesListComponent from '@/components/lists/advantages-list-component';
import SubscriptionItemHeaderComponent from '@/components/parts/subscription-item-header-component';
import SubscriptionItemPriceComponent from '@/components/parts/subscription-item-price-component';
import { SubscriptionItemComponentProps } from '@/types/props/subscription-item-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/subscription-item-component.scss';

const cn = createClassNameManager('subscriptionItem');

const SubscriptionItemComponent: FC<SubscriptionItemComponentProps> = ({
  className, description, features, icon, isRecommended, prices, testId, title
}) => (
  <div
    className={cn({
      additionalClassNames: className,
      modifiers: {
        isRecommended
      }
    })}
    data-test={testId}
  >
    <SubscriptionItemHeaderComponent
      description={description}
      icon={icon}
      title={title}
    />
    <SubscriptionItemPriceComponent price={prices.monthly} suffix='month' />
    <AdvantagesListComponent features={features} />
  </div>
);

export default SubscriptionItemComponent;
