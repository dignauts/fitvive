import { FC } from 'react';

import EmployeeItemComponent from '@/components/items/employee-item-component';
import BaseListComponent from '@/components/lists/base-list-component';
import { Employee, Media, Occupation } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';
import { EmployeesListComponentProps } from '@/types/props/employees-list-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/employees-list-component.scss';

const cn = createClassNameManager('employeesList');

type Item = WithIdentifier<Employee>;

const EmployeesListComponent: FC<EmployeesListComponentProps> = ({
  className, items, testId
}) => items && items.length > 0 && (
  <BaseListComponent<Item>
    className={cn({ additionalClassNames: className })}
    items={items as Array<Item>}
    render={({ avatar, fullName, occupation }) => (
      <EmployeeItemComponent
        avatar={(avatar as Media)?.url}
        fullName={fullName}
        occupation={(occupation as Occupation).name}
      />
    )}
    testId={testId}
  />
);

export default EmployeesListComponent;
