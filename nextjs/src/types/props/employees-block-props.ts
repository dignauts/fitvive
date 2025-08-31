import { RedirectButton } from '@/payload-types';
import { BlockComponentProps } from '@/types/props/block-props';
import { BaseComponentProps } from '@/types/props/common-props';
import { EmployeesListComponentProps } from '@/types/props/employees-list-props';

export interface EmployeesBlockComponentProps
  extends BaseComponentProps, Pick<BlockComponentProps, 'header'> {
  employees?: EmployeesListComponentProps['items'];
  redirectButton?: RedirectButton;
}
