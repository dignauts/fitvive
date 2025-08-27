import { WithIdentifier } from '@/types/generics-types';
import { BaseListComponentProps } from '@/types/props/base-list-props';
import { cn } from '@/utils/cn-util';
import '@/scss/base-list-component.scss';

const BaseListComponent = <T extends WithIdentifier<object>>({
  className, items, render, testId
}: BaseListComponentProps<T>) => items && (
  <ul className={cn('baseList', { additionalClassNames: className })} data-testid={testId}>
    {
      items.map((item, index) => (
        <li className={cn('baseList', { element: 'listItem' })} key={item.id || index}>
          {render(item)}
        </li>
      ))
    }
  </ul>
);

export default BaseListComponent;
