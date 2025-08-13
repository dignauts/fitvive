import { ReactNode, SVGProps } from 'react';

import { CatchAllPagesType } from '@/types/common-types';

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export interface BaseComponentWithChildrenProps extends BaseComponentProps {
  children?: ReactNode | ReactNode[];
}

export type BaseIconComponentProps = BaseComponentProps & SVGProps<SVGSVGElement>;

export interface CatchAllDynamicPageProps {
  params: Promise<CatchAllPagesType>
}
