import { FC } from 'react';

import ProgramButtonComponent from '@/components/buttons/program-button-component';
import ContainerComponent from '@/components/main/container-component';
import TypographyComponent from '@/components/main/typography-component';
import ProgramItemIconComponent from '@/components/parts/program-item-icon-component';
import { ProgramItemComponentProps } from '@/types/props/program-item-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/program-item-component.scss';

const cn = createClassNameManager('programItem');

const ProgramItemComponent: FC<ProgramItemComponentProps> = ({
  className, description, href, icon, testId, title
}) => (
  <div className={cn({ additionalClassNames: className })} data-testid={testId}>
    <ContainerComponent className={cn({ element: 'container' })}>
      <ProgramItemIconComponent icon={icon} />
      <div className={cn({ element: 'bottom' })}>
        <TypographyComponent
          className={cn({ element: 'text' })}
          component="h2"
          variant='h2'
          weight='extra'
        >
          {title}
        </TypographyComponent>
        <TypographyComponent className={cn({ element: 'text' })} variant='h4'>
          {description}
        </TypographyComponent>
        <ProgramButtonComponent href={href} />
      </div>
    </ContainerComponent>
  </div>
);

export default ProgramItemComponent;
