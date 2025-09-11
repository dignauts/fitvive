import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

import BaseListComponent from '@/components/lists/base-list-component';
import AdvantageComponent from '@/components/main/advantage-component';
import TypographyComponent from '@/components/main/typography-component';
import { PricingFeature } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';
import { AdvantagesListComponentProps } from '@/types/props/advantages-list-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/advantages-list-component.scss';

const cn = createClassNameManager('advantagesList');

type Item = WithIdentifier<PricingFeature>

const AdvantagesListComponent: FC<AdvantagesListComponentProps> = async ({
  className, features, testId
}) => {
  const t = await getTranslations();

  return (
    <div className={cn({ additionalClassNames: className })} data-testid={testId}>
      <TypographyComponent
        className={cn({ element: 'title' })}
        variant='h6'
        weight='medium'
      >
        {`${t('component.pricing.advantages_list_title')}:`}
      </TypographyComponent>
      {features && (
        <BaseListComponent<Item>
          items={features as Item[]}
          render={({ title }) => (
            <AdvantageComponent>{title}</AdvantageComponent>
          )}
        />
      )}
    </div>
  );
};

export default AdvantagesListComponent;
