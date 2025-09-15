import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import LinkButtonsComponent from '@/components/buttons/link-buttons-component';
import ResponsiveImageComponent from '@/components/images/responsive-image-component';
import { Media } from '@/payload-types';
import { HeroBlockComponentProps } from '@/types/props/hero-block-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/hero-block-component.scss';

const cn = createClassNameManager('heroBlock');

const HeroBlockComponent: FC<HeroBlockComponentProps> = ({
  className, header, image, links, testId
}) => (
  <BlockComponent
    className={cn({ additionalClassNames: className })}
    enableMarginBottom
    header={header}
    outside={<div className={cn({ element: 'flare' })} />}
    position='center'
    testId={testId}
    titleProps={{
      variant: 'd1',
      weight: 'medium'
    }}
  >
    <LinkButtonsComponent
      className={cn({ element: 'buttons' })}
      links={links}
      position='center'
    />
    {
      image && (
        <ResponsiveImageComponent
          alt={(image as Media)?.alt}
          className={cn({ element: 'image' })}
          height={375}
          src={(image as Media)?.url as string}
          width={1200}
        />
      )
    }
  </BlockComponent>
);

export default HeroBlockComponent;
