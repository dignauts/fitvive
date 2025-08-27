'use server';

import { payloadService } from '@/services/payload-service';
import { ContactFormType } from '@/types/forms/contact-form-types';

export const createMessage = async ({ message, subject, ...rest }: ContactFormType) => {
  try {
    const payload = await payloadService();
    await payload.create({
      collection: 'messages',
      data: {
        message,
        personalData: rest,
        subject
      }
    });

    return ({
      isSuccess: true,
      message: 'request.success.new_message'
    });
  } catch (error) {
    console.error(error);

    return ({
      isSuccess: false,
      message: 'request.error.default'
    });
  }
};
