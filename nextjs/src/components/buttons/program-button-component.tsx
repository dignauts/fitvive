import IconButtonComponent from '@/components/buttons/icon-button-component';
import ArrowUpRightIconComponent from '@/components/icons/24x24/arrow-up-right-icon-component';
import { ProgramItemProps } from '@/types/props/program-item-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('programItem');

const ProgramButtonComponent = ({ href }: Pick<ProgramItemProps, 'href'>) => href && (
  <div className={cn({ element: 'redirect' })}>
    <IconButtonComponent
      className={cn({ element: 'redirectButton' })}
      color='neutral'
      linkProps={{ href }}
    >
      <ArrowUpRightIconComponent />
    </IconButtonComponent>
  </div>
);

export default ProgramButtonComponent;
