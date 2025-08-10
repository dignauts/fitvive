import { FC, Fragment } from 'react';

import ChipComponent from '@/components/main/chip-component';
import BreadcrumbsHomeChipComponent from '@/components/parts/breadcrumbs-home-chip-component';
import BreadcrumbsSeparatorComponent from '@/components/parts/breadcrumbs-separator-componen';
import { BreadcrumbsComponentProps } from '@/types/props/breadcrumbs-props';
import { cn } from '@/utils/cn-util';
import { isLastItem } from '@/utils/is-last-item-util';

import '@/scss/breadcrumbs-component.scss';

const BreadcrumbsComponent: FC<BreadcrumbsComponentProps> = ({
  className, items, testId
}) => items.length > 0 && (
  <div className={cn('breadcrumbs', { additionalClassNames: className })} data-testid={testId}>
    <BreadcrumbsHomeChipComponent />
    <BreadcrumbsSeparatorComponent />
    {
      items.map(({ content, href }, index) => {
        const isLast = isLastItem({ index, length: items.length });

        return (
          <Fragment key={`BreadcrumbsComponent-ChipComponent-${content}-${index}`}>
            <ChipComponent
              className={cn('breadcrumbs', { element: 'item' })}
              color={isLast ? 'default' : 'disabled'}
              content={content}
              href={href}
              size='small'
            />
            {!isLast && <BreadcrumbsSeparatorComponent />}
          </Fragment>
        );
      })
    }
  </div>
);

export default BreadcrumbsComponent;
