import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import ProgramsListComponent from '@/components/lists/programs-list-component';
import { ProgramsBlockComponentProps } from '@/types/props/programs-block-props';
import { createClassNameManager } from '@/utils/cn-util';

import '@/scss/programs-block-component.scss';

const cn = createClassNameManager('programsBlock');

const ProgramsBlockComponent: FC<ProgramsBlockComponentProps> = ({
  className, header, programs, testId
}) => (
  <BlockComponent
    className={cn({ additionalClassNames: className })}
    enableMarginBottom
    header={header}
    outside={<ProgramsListComponent items={programs} />}
    position='center'
    testId={testId}
  />
);

export default ProgramsBlockComponent;
