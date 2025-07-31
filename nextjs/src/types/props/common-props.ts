import { SVGProps } from 'react';

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export type BaseIconComponentProps = BaseComponentProps & SVGProps<SVGSVGElement>;
