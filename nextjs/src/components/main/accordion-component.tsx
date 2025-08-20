'use client';

import { FC, useCallback, useState } from 'react';

import AccordionItemComponent from '@/components/items/accordion-item-component';
import { IdentifierType } from '@/types/common-types';
import { AccordionComponentProps } from '@/types/props/accordion-props';
import { cn } from '@/utils/cn-util';
import '@/scss/accordion-component.scss';

const AccordionComponent: FC<AccordionComponentProps> = ({
  className, items, testId
}) => {
  const [selectedItemId, setSelectedItemId] = useState<IdentifierType['id']>(null);

  const onToggle = useCallback((id: IdentifierType['id']) => () => {
    setSelectedItemId((previousItemId) => (previousItemId === id ? null : id));
  }, []);

  return (
    <div className={cn('accordion', { additionalClassNames: className })} data-testid={testId}>
      {
        items.map(({ id, ...item }) => (
          <AccordionItemComponent
            isExpanded={id === selectedItemId}
            key={id}
            onExpand={onToggle(id)}
            {...item}
          />
        ))
      }
    </div>
  );
};

export default AccordionComponent;
