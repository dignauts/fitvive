import { SVGProps } from 'react';

import { CatchAllPagesType } from '@/types/common-types';

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export type BaseIconComponentProps = BaseComponentProps & SVGProps<SVGSVGElement>;

export interface CatchAllDynamicPageProps {
  params: Promise<CatchAllPagesType>
}
