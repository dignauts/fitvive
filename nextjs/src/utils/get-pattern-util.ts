import { REGEX } from '@/constants/regex-constants';
import { InputComponentProps } from '@/types/props/input-props';

export const getPattern = ({
  type
}: Pick<InputComponentProps, 'type'>) => {
  switch (type) {
    case 'email':
      return ({
        message: 'pattern.invalid_email',
        value: REGEX.EMAIL
      });
    case 'tel':
      return ({
        message: 'pattern.invalid_phone_number',
        value: REGEX.PHONE_NUMBER
      });
    default:
      return undefined;
  }
};
