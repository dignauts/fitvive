import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import ContactFormComponent from '@/components/forms/contact-form-component';
import QuickContactComponent from '@/components/main/quick-contact-component';
import { ContactBlockComponentProps } from '@/types/props/contact-block-props';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-block-component.scss';

const ContactBlockComponent: FC<ContactBlockComponentProps> = ({
  header, isContactDetailsEnabled, testId
}) => (
  <BlockComponent
    className={cn('contactBlock', {
      modifiers: {
        withContactDetails: isContactDetailsEnabled
      }
    })}
    header={header}
    testId={testId}
  >
    <div className={cn('contactBlock', { element: 'wrapper' })}>
      <ContactFormComponent />
      {isContactDetailsEnabled && <QuickContactComponent />}
    </div>
  </BlockComponent>
);

export default ContactBlockComponent;
