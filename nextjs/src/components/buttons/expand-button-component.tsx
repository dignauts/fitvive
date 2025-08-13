import { FC } from 'react';

import { ExpandButtonComponentProps } from '@/types/props/expand-button-props';
import { cn } from '@/utils/cn-util';
import '@/scss/expand-button-component.scss';

const ExpandButtonComponent: FC<ExpandButtonComponentProps> = ({
  className, isExpanded, onExpand, testId
}) => (
  <button
    className={cn('expandButton', {
      additionalClassNames: className,
      modifiers: {
        isExpanded
      }
    })}
    data-testid={testId}
    onClick={onExpand}
  >
    <span className={cn('expandButton', { element: 'icon' })} />
  </button>
);

export default ExpandButtonComponent;
