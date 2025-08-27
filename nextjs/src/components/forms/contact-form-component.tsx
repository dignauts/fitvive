'use client';

import { SubmitHandler } from 'react-hook-form';

import BaseFormComponent from '@/components/forms/base-form-component';
import { useContactFormData } from '@/hooks/use-contact-form-data';
import { createMessage } from '@/services/create/create-message';
import { ContactFormType } from '@/types/forms/contact-form-types';
import { cn } from '@/utils/cn-util';
import '@/scss/contact-form-component.scss';

const ContactFormComponent = () => {
  const { defaultValues, inputs } = useContactFormData();

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    createMessage(data);
  };

  return (
    <BaseFormComponent<ContactFormType>
      className={cn('contactForm')}
      defaultValues={defaultValues}
      inputs={inputs}
      onSubmit={onSubmit}
    />
  );
};

export default ContactFormComponent;
