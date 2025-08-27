import { FC } from 'react';

import BaseIconComponent from '@/components/icons/base-icon-component';
import { BaseIconComponentProps } from '@/types/props/common-props';

const XIconComponent: FC<BaseIconComponentProps> = ({
  className, fill = 'currentColor'
}) => (
  <BaseIconComponent className={className}>
    <path
      d="M13.6795 10.62L20.2395 3H18.6895L12.9995 9.62L8.44945 3H3.18945L10.0695 13.01L3.18945 21H4.73945L10.7495 14.01L15.5495 21H20.7895L13.6595 10.62H13.6795ZM11.5495 13.09L10.8495 12.09L5.30945 4.16H7.69945L12.1695 10.56L12.8695 11.56L18.6895 19.88H16.2995L11.5495 13.09Z"
      fill={fill}
    />
  </BaseIconComponent>
);

export default XIconComponent;
