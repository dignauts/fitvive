import { BaseComponentProps } from '@/types/props/common-props';
import { InputComponentProps } from '@/types/props/input-props';

export interface HelperTextComponentProps
  extends BaseComponentProps, Pick<InputComponentProps, 'isInvalid'> {
  message?: string;
}
