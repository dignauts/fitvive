'use client';

import { FC } from 'react';
import Marquee, { MarqueeProps } from 'react-fast-marquee';

import TypographyComponent from '@/components/main/typography-component';
import { QuickNewsMarqueeComponentProps } from '@/types/props/quick-news-marquee-props';
import { createClassNameManager } from '@/utils/cn-util';
import { getHref } from '@/utils/get-href-util';
import '@/scss/quick-news-marquee-component.scss';

const options: MarqueeProps = {
  autoFill: true,
  gradient: false,
  gradientColor: 'rgb(var(--dgn-color-primary-500))',
  pauseOnHover: true,
  speed: 64
};

const cn = createClassNameManager('quickNewsMarquee');

const QuickNewsMarqueeComponent: FC<QuickNewsMarqueeComponentProps> = ({
  className, testId, quickNews
}) => (
  <Marquee
    {...options}
    className={cn({ additionalClassNames: className })}
    data-testid={testId}
  >
    {
      quickNews.map((news) => (
        <TypographyComponent
          className={cn({ element: 'item' })}
          color='secondary'
          component="h2"
          key={news.id}
          linkProps={{ href: getHref(news) }}
          variant='h1'
          weight='extra'
        >
          {news.label}
        </TypographyComponent>
      ))
    }
  </Marquee>
);

export default QuickNewsMarqueeComponent;
