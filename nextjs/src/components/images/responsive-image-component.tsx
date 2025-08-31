import Image from 'next/image';
import { FC } from 'react';

import { ResponsiveImageComponentProps } from '@/types/props/responsive-image-props';
import { createClassNameManager } from '@/utils/cn-util';
import { responsiveAspectRatioStyle } from '@/utils/responsive-aspect-ratio-style-util';
import '@/scss/responsive-image-component.scss';

const cn = createClassNameManager('responsiveImage');

const ResponsiveImageComponent: FC<ResponsiveImageComponentProps> = ({
  alt, className, src, testId, quality = 85, ...rest
}) => (
  <div
    className={cn({ additionalClassNames: className })}
    data-testid={testId}
    style={responsiveAspectRatioStyle({ height: rest.height, width: rest.width })}
  >
    <Image
      alt={alt}
      className={cn({ element: 'image' })}
      fill
      quality={quality}
      src={src}
    />
  </div>
);

export default ResponsiveImageComponent;
