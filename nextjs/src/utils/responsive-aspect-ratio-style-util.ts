import { CSSProperties } from 'react';

import { ResponsiveImageComponentProps } from '@/types/props/responsive-image-props';

export const responsiveAspectRatioStyle = ({
  height, width
}: Pick<ResponsiveImageComponentProps, 'height' | 'width'>): CSSProperties => ({
  aspectRatio: `${width} / ${height}`,
  maxWidth: width
});
