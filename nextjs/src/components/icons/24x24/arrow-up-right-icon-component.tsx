import { FC } from 'react';

import BaseIconComponent from '@/components/icons/base-icon-component';
import { BaseIconComponentProps } from '@/types/props/common-props';

const ArrowUpRightIconComponent: FC<BaseIconComponentProps> = ({
  className, fill = 'currentColor'
}) => (
  <BaseIconComponent className={className}>
    <path d="m11.79 10.79-4.5 4.5 1.42 1.42 4.5-4.5L17 16V7H8z" fill={fill} />
  </BaseIconComponent>
);

export default ArrowUpRightIconComponent;
