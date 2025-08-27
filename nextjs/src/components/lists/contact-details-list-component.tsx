import { FC } from 'react';

import ContactItemComponent from '@/components/items/contact-item-component';
import BaseListComponent from '@/components/lists/base-list-component';
import { ContactDetailsListComponentProps } from '@/types/props/contact-details-list-props';
import { ContactItemProps } from '@/types/props/contact-item-props';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-details-list-component.scss';

const ContactDetailsListComponent: FC<ContactDetailsListComponentProps> = ({
  className, items, testId
}) => items && items.length > 0 && (
  <BaseListComponent<ContactItemProps>
    className={cn('contactDetailsList', { additionalClassNames: className })}
    items={items}
    render={({ label, type, value }) => (
      <ContactItemComponent label={label} type={type}>
        {value}
      </ContactItemComponent>
    )}
    testId={testId}
  />
);

export default ContactDetailsListComponent;
