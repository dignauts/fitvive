import { FC } from 'react';

import IconButtonComponent from '@/components/buttons/icon-button-component';
import ClockIconComponent from '@/components/icons/24x24/clock-icon-component';
import EnvelopeIconComponent from '@/components/icons/24x24/envelope-icon-component';
import MarkerIconComponent from '@/components/icons/24x24/marker-icon-component';
import PhoneIconComponent from '@/components/icons/24x24/phone-icon-component';
import LabeledComponent from '@/components/main/labeled-component';
import TypographyComponent from '@/components/main/typography-component';
import { ContactItemComponentProps } from '@/types/props/contact-item-props';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-item-component.scss';

const icons = {
  clock: ClockIconComponent,
  envelope: EnvelopeIconComponent,
  marker: MarkerIconComponent,
  phone: PhoneIconComponent
} as const;

const ContactItemComponent: FC<ContactItemComponentProps> = ({
  children, className, label, testId, type
}) => {
  const Icon = icons[type];

  return (
    <div className={cn('contactItem', { additionalClassNames: className })} data-testid={testId}>
      <IconButtonComponent
        className={cn('contactItem', { element: 'icon' })}
        color='neutral'
        component='div'
      >
        <Icon />
      </IconButtonComponent>
      <LabeledComponent className={cn('contactItem', { element: 'content' })} label={label}>
        <TypographyComponent
          className={cn('contactItem', { element: 'text' })}
          color='secondary'
          variant='caption'
          weight='medium'
        >
          {children}
        </TypographyComponent>
      </LabeledComponent>
    </div>
  );
};

export default ContactItemComponent;
