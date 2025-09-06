import Image from 'next/image';

import IconButtonComponent from '@/components/buttons/icon-button-component';
import { ProgramItemComponentProps } from '@/types/props/program-item-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('programItem');

const ProgramItemIconComponent = ({ icon }: Pick<ProgramItemComponentProps, 'icon'>) => icon && (
  <IconButtonComponent
    className={cn({ element: 'button' })}
    color='primary'
    component='div'
  >
    <Image
      alt=''
      className={cn({ element: 'icon' })}
      height={48}
      src={icon}
      width={48}
    />
  </IconButtonComponent>
);

export default ProgramItemIconComponent;
