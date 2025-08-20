import { FC } from 'react';

import BlockComponent from '@/components/blocks/block-component';
import ContactFormComponent from '@/components/forms/contact-form-component';
import { ContactBlockComponentProps } from '@/types/props/contact-block-props';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-block-component.scss';

const ContactBlockComponent: FC<ContactBlockComponentProps> = ({
  header, testId
}) => (
  <BlockComponent
    className={cn('contactBlock')}
    header={header}
    testId={testId}
  >
    <ContactFormComponent />
  </BlockComponent>
);

export default ContactBlockComponent;
