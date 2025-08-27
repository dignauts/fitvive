import { FC } from 'react';

import { BaseIconComponentProps } from '@/types/props/common-props';
import { cn } from '@/utils/cn-util';
import '@/scss/base-icon-component.scss';

const BaseIconComponent: FC<BaseIconComponentProps> = ({
  children, className, ...props
}) => (
  <svg
    className={cn('baseIcon', { additionalClassNames: className })}
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export default BaseIconComponent;
