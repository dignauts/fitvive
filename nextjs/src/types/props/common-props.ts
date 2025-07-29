import { SVGProps } from 'react';

export interface BaseComponentProps {
  className?: string;
}

export type BaseIconComponentProps = BaseComponentProps & SVGProps<SVGSVGElement>;
