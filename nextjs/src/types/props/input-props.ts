import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

import { BaseComponentProps } from '@/types/props/common-props';

export interface InputComponentProps extends BaseComponentProps {
  component?: 'input' | 'textarea';
  errorMessage?: string;
  fullWidth?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  label: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  value?: string | readonly string[] | number;
  withHelperText?: boolean;
}
