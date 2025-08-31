import { BaseComponentProps } from '@/types/props/common-props';

export interface EmployeeItemComponentProps extends BaseComponentProps {
  avatar?: null | string;
  fullName: string;
  occupation: string;
}
