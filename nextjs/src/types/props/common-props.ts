import { SVGProps } from 'react';

import { CatchAllPagesType, ChildrenType } from '@/types/common-types';

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export interface BaseComponentWithChildrenProps extends BaseComponentProps {
  children?: ChildrenType
}

export type BaseIconComponentProps = BaseComponentProps & SVGProps<SVGSVGElement>;

export interface CatchAllDynamicPageProps {
  params: Promise<CatchAllPagesType>
}

