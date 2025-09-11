import { FC } from 'react';

import TypographyComponent from '@/components/main/typography-component';
import { SubscriptionItemPriceComponentProps } from '@/types/props/subscription-item-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('subscriptionItem');

const SubscriptionItemPriceComponent: FC<SubscriptionItemPriceComponentProps> = ({
  className, price, suffix, testId
}) => (
  <div className={cn({ additionalClassNames: className, element: 'price' })} data-testid={testId}>
    <TypographyComponent
      className={cn({ element: 'value' })}
      component="h2"
      variant='d5'
      weight='semi'
    >
      {price}
    </TypographyComponent>
    <TypographyComponent
      className={cn({ element: 'period' })}
      variant='h4'
      weight='medium'
    >
      {`/${suffix}`}
    </TypographyComponent>
  </div>
);

export default SubscriptionItemPriceComponent;
