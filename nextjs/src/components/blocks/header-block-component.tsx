import { FC } from 'react';

import BaseBlockComponent from '@/components/blocks/base-block-component';
import BreadcrumbsComponent from '@/components/main/breadcrumbs-component';
import TypographyComponent from '@/components/main/typography-component';
import { HeaderBlockComponentProps } from '@/types/props/header-block-props';
import { cn } from '@/utils/cn-util';
import '@/scss/header-block-component.scss';

const HeaderBlockComponent: FC<HeaderBlockComponentProps> = ({
  pageTitle
}) => (
  <BaseBlockComponent className={cn('headerBlock')} paddingY='sm'>
    <TypographyComponent
      className={cn('headerBlock', { element: 'title' })}
      variant='h4'
      weight='semi'
    >
      {pageTitle}
    </TypographyComponent>
    <BreadcrumbsComponent items={[{ content: pageTitle }]} />
  </BaseBlockComponent>
);

export default HeaderBlockComponent;
