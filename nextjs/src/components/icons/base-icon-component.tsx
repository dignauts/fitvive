import { FC } from 'react';

import { BaseIconComponentProps } from '@/types/props/common-props';
import { cn } from '@/utils/cn-util';

const BaseIconComponent: FC<BaseIconComponentProps> = ({
  children, className, ...props
}) => (
  <svg
    className={cn('icon', { additionalClassNames: className })}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export default BaseIconComponent;
