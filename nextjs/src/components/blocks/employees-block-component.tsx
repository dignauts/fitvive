import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import RedirectButtonComponent from '@/components/buttons/redirect-button-component';
import EmployeesListComponent from '@/components/lists/employees-list-component';
import { Page } from '@/payload-types';
import { EmployeesBlockComponentProps } from '@/types/props/employees-block-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/employees-block-component.scss';

const cn = createClassNameManager('employeesBlock');

const EmployeesBlockComponent: FC<EmployeesBlockComponentProps> = ({
  className, employees, header, redirectButton, testId
}) => (
  <BlockComponent
    className={cn({ additionalClassNames: className })}
    enableMarginBottom
    header={header}
    position='center'
    testId={testId}
  >
    <EmployeesListComponent
      className={cn({ element: 'employees' })}
      items={employees}
    />
    {
      redirectButton?.page && (
        <RedirectButtonComponent
          className={cn({ element: 'button' })}
          href={(redirectButton?.page as Page).slug}
          name={redirectButton?.label}
        />
      )
    }
  </BlockComponent>
);

export default EmployeesBlockComponent;
