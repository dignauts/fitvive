'use client';

import { useTranslations } from 'next-intl';
import { useForm, FieldValues, Controller } from 'react-hook-form';

import ButtonComponent from '@/components/buttons/button-component';
import InputComponent from '@/components/inputs/input-component';
import { BaseFormComponentProps } from '@/types/props/base-form-props';
import { cn } from '@/utils/cn-util';
import { getPattern } from '@/utils/get-pattern-util';
import '@/scss/base-form-component.scss';

const BaseFormComponent = <T extends FieldValues>({
  className, defaultValues, inputs, isLoading, onSubmit, testId
}: BaseFormComponentProps<T>) => {
  const t = useTranslations();
  const { control, handleSubmit } = useForm<T>({
    defaultValues
  });

  return (
    <form
      className={cn('baseForm', { additionalClassNames: className })}
      data-testid={testId}
      onSubmit={handleSubmit(onSubmit)}
    >
      {
        inputs.map(({ component, label, name, placeholder, type }, index) => {
          const isRequired = defaultValues[name] !== undefined;

          return (
            <Controller
              control={control}
              key={`BaseFormComponent-${name}-${index}`}
              name={name}
              render={({ field, fieldState }) => (
                <InputComponent
                  className={cn('baseForm', {
                    element: 'input',
                    modifiers: {
                      name
                    }
                  })}
                  component={component}
                  errorMessage={fieldState?.error?.message && t(fieldState.error.message)}
                  fullWidth
                  isInvalid={!!fieldState.error}
                  isRequired={isRequired}
                  label={label}
                  name={field.name}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  placeholder={placeholder}
                  value={field.value}
                />
              )}
              rules={{
                pattern: getPattern({ type }) ?? undefined,
                required: isRequired
              }}
            />
          );
        })
      }
      {/* [Temporary solution] Todo: In the nearest future, display a loader here instead of the content */}
      <ButtonComponent
        className={cn('baseForm', { element: 'button' })}
        isDisabled={isLoading}
        type='submit'
      >
        {t('button.send_message')}
      </ButtonComponent>
    </form>
  );
};

export default BaseFormComponent;
