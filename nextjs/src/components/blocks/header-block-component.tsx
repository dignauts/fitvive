import { FC } from 'react';

import TypographyComponent from '../main/typography-component';

import BreadcrumbsComponent from '@/components/main/breadcrumbs-component';
import ContainerComponent from '@/components/main/container-component';
import { HeaderBlockComponentProps } from '@/types/props/header-block-props';
import { cn } from '@/utils/cn-util';
import '@/scss/header-block-component.scss';

const HeaderBlockComponent: FC<HeaderBlockComponentProps> = ({
  pageTitle
}) => (
  <section className={cn('headerBlock')}>
    <ContainerComponent className={cn('headerBlock', { element: 'container' })}>
      <TypographyComponent
        className={cn('headerBlock', { element: 'title' })}
        variant='h4'
        weight='semi'
      >
        {pageTitle}
      </TypographyComponent>
      <BreadcrumbsComponent items={[{ content: pageTitle }]} />
    </ContainerComponent>
  </section>
);

export default HeaderBlockComponent;
