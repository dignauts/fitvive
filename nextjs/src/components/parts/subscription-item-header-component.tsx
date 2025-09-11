import Image from 'next/image';

import TypographyComponent from '@/components/main/typography-component';
import { Media } from '@/payload-types';
import { SubscriptionItemComponentProps } from '@/types/props/subscription-item-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('subscriptionItem');

const SubscriptionItemHeaderComponent = ({
  className, description, icon, testId, title
}: Pick<SubscriptionItemComponentProps, 'className' | 'description' | 'icon' | 'testId' | 'title'>) => (
  <header className={cn({ additionalClassNames: className, element: 'header' })} data-testid={testId}>
    <Image
      alt={(icon as Media)?.alt || ''}
      className={cn({ element: 'icon' })}
      height={72}
      src={(icon as Media)?.url as string}
      width={72}
    />
    <TypographyComponent
      className={cn({ element: 'title' })}
      component="h2"
      uppercase
      variant='h4'
      weight='extra'
    >
      {title}
    </TypographyComponent>
    <TypographyComponent
      className={cn({ element: 'description' })}
      variant='caption'
      weight='medium'
    >
      {description}
    </TypographyComponent>
  </header>
);

export default SubscriptionItemHeaderComponent;
