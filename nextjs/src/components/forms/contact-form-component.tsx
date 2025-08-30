'use client';

import { useTranslations } from 'next-intl';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify/unstyled';

import BaseFormComponent from '@/components/forms/base-form-component';
import { useContactFormData } from '@/hooks/use-contact-form-data';
import { createMessage } from '@/services/create/create-message';
import { ContactFormType } from '@/types/forms/contact-form-types';
import { cn } from '@/utils/cn-util';

import '@/scss/contact-form-component.scss';

const ContactFormComponent = () => {
  const t = useTranslations();
  const { defaultValues, inputs } = useContactFormData();

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    toast.promise(
      createMessage(data),
      {
        error: {
          render: ({ data }: { data: { message: string } }) => t(data.message)
        },
        pending: t('request.pending.new_message'),
        success: {
          render: ({ data }) => t(data.message)
        }
      }
    );
  };

  return (
    <>
      <BaseFormComponent<ContactFormType>
        className={cn('contactForm')}
        defaultValues={defaultValues}
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ContactFormComponent;
