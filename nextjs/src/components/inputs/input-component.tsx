import { FC } from 'react';

import HelperTextComponent from '@/components/main/helper-text-component';
import TypographyComponent from '@/components/main/typography-component';
import { InputComponentProps } from '@/types/props/input-props';
import { cn } from '@/utils/cn-util';

import '@/scss/input-component.scss';

const InputComponent: FC<InputComponentProps> = ({
  className, component: Component = 'input', errorMessage, fullWidth, isInvalid, isRequired, label,
  name, onBlur, onChange, placeholder, testId, type = 'text', value, withHelperText
}) => (
  <div
    className={cn('input', {
      additionalClassNames: className,
      modifiers: {
        fullWidth,
        isInvalid
      }
    })}
    data-testid={testId}
  >
    <TypographyComponent
      className={cn('input', { element: 'label', modifiers: { isRequired } })}
      component="label"
      labelProps={{ htmlFor: name }}
      variant='h6'
      weight='semi'
    >
      {label}
      {isRequired && <span>*</span>}
    </TypographyComponent>
    <Component
      className={cn('input', { element: 'input' })}
      id={name}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      required={isRequired}
      type={type}
      value={value}
    />
    {
      (isInvalid || withHelperText) && (
        <HelperTextComponent isInvalid={isInvalid} message={errorMessage} />
      )
    }
  </div>
);

export default InputComponent; 
