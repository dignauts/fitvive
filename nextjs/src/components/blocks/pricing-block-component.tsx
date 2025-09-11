import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import SubscriptionItemComponent from '@/components/items/subscription-item-component';
import { PricingBlockComponentProps } from '@/types/props/pricing-block-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/pricing-block-component.scss';

const cn = createClassNameManager('pricingBlock');

const PricingBlockComponent: FC<PricingBlockComponentProps> = ({
  className, header, subscriptions, testId
}) => (
  <BlockComponent
    className={cn({ additionalClassNames: className })}
    enableMarginBottom
    header={header}
    position='center'
    testId={testId}
  >
    <div className={cn({ element: 'subscriptionsList' })}>
      {
        subscriptions && subscriptions.length > 0 && subscriptions.map((subscription) => (
          <SubscriptionItemComponent key={subscription.id} {...subscription} />
        ))
      }
    </div>
  </BlockComponent>
);

export default PricingBlockComponent;
