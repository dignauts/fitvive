'use client';

import BaseFormComponent from '@/components/forms/base-form-component';
import { useContactFormData } from '@/hooks/use-contact-form-data';
import { ContactFormType } from '@/types/forms/contact-form-types';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-form-component.scss';

const ContactFormComponent = () => {
  const { defaultValues, inputs } = useContactFormData();

  return (
    <BaseFormComponent<ContactFormType>
      className={cn('contactForm')}
      defaultValues={defaultValues}
      inputs={inputs}
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};

export default ContactFormComponent;
