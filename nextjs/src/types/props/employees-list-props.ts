import { Employee } from '@/payload-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface EmployeesListComponentProps
  extends BaseComponentProps {
  items?: (number | Employee)[] | null;
}
