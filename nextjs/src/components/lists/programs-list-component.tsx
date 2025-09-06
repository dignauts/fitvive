import { FC } from 'react';

import ProgramItemComponent from '@/components/items/program-item-component';
import BaseListComponent from '@/components/lists/base-list-component';
import { Media, Page, Program } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';
import { ProgramsListComponentProps } from '@/types/props/programs-list-props';
import { createClassNameManager } from '@/utils/cn-util';
import '@/scss/programs-list-component.scss';

const cn = createClassNameManager('programsList');

const ProgramsListComponent: FC<ProgramsListComponentProps> = ({
  className, items, testId
}) => items && items.length > 0 && (
  <BaseListComponent<WithIdentifier<Program>>
    className={cn({ additionalClassNames: className })}
    items={items}
    render={({ description, icon, page, title }) => (
      <ProgramItemComponent
        description={description}
        href={(page as Page)?.slug}
        icon={(icon as Media)?.url}
        title={title}
      />
    )}
    testId={testId}
  />
);

export default ProgramsListComponent;
