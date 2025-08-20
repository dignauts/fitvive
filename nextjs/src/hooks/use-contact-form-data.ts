'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { ContactFormType } from '@/types/forms/contact-form-types';
import { BaseFormInputProps } from '@/types/props/base-form-props';

type Input = BaseFormInputProps<ContactFormType>;

export const useContactFormData = () => {
  const t = useTranslations();

  const defaultValues = useMemo<ContactFormType>(() => ({
    email: '',
    fullName: '',
    message: '',
    phoneNumber: '',
    subject: ''
  }), []);

  const inputs = useMemo<Input[]>(() => [
    {
      label: t('label.full_name'),
      name: 'fullName',
      placeholder: t('common.placeholder', { hint: 'Jane Doe' })
    },
    {
      label: t('label.email'),
      name: 'email',
      placeholder: t('common.placeholder', { hint: 'janedoe@dignauts.com' }),
      type: 'email'
    },
    {
      label: t('label.phone_number'),
      name: 'phoneNumber',
      placeholder: t('common.placeholder', { hint: '+48 555222111' }),
      type: 'tel'
    },
    {
      label: t('label.subject'),
      name: 'subject',
      placeholder: t('common.placeholder', { hint: 'Membership' })
    },
    {
      component: 'textarea',
      label: t('label.message'),
      name: 'message',
      placeholder: t('common.placeholder', { hint: "I'd like to ask..." })
    }
  ], [t]);

  return {
    defaultValues,
    inputs
  };
};
