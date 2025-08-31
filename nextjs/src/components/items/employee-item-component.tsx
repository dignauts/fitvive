import { FC } from 'react';

import BaseImageComponent from '@/components/images/responsive-image-component';
import TypographyComponent from '@/components/main/typography-component';
import { ASSET } from '@/constants/assets-constants';
import { EmployeeItemComponentProps } from '@/types/props/employee-item-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/employee-item-component.scss';

const cn = createClassNameManager('employeeItem');

const EmployeeItemComponent: FC<EmployeeItemComponentProps> = ({
  avatar, className, fullName, occupation, testId
}) => (
  <div className={cn({ additionalClassNames: className })} data-testid={testId}>
    <div className={cn({ element: 'image' })}>
      <BaseImageComponent
        alt={fullName}
        className={cn({ element: 'avatar' })}
        height={378}
        src={avatar || ASSET.EMPLOYEE_AVATAR_FALLBACK}
        width={278}
      />
      <BaseImageComponent
        alt=''
        className={cn({ element: 'pattern' })}
        height={378}
        src={ASSET.EMPLOYEE_PATTERN}
        width={278}
      />
    </div>
    <TypographyComponent
      className={cn({ element: 'fullName' })}
      component="h2"
      variant='h4'
      weight='bold'
    >
      {fullName}
    </TypographyComponent>
    <TypographyComponent className={cn({ element: 'occupation' })} weight='medium'>
      {occupation}
    </TypographyComponent>
  </div>
);

export default EmployeeItemComponent;
