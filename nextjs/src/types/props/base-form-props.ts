import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form';

import { BaseComponentProps } from '@/types/props/common-props';
import { InputComponentProps } from '@/types/props/input-props';

export interface BaseFormInputProps<T extends FieldValues>
  extends Pick<InputComponentProps, 'component' | 'label' | 'name' | 'placeholder'> {
  name: Path<T>;
  type?: 'email' | 'text' | 'tel';
}

export interface BaseFormComponentProps<T extends FieldValues>
  extends BaseComponentProps {
  defaultValues: DefaultValues<T>;
  inputs: BaseFormInputProps<T>[];
  isLoading?: boolean;
  onSubmit: SubmitHandler<T>;
}
