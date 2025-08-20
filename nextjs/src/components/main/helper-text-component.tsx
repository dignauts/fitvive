import { FC } from 'react';

import TypographyComponent from '@/components/main/typography-component';
import { HelperTextComponentProps } from '@/types/props/helper-text-props';
import { cn } from '@/utils/cn-util';
import '@/scss/helper-text-component.scss';

const HelperTextComponent: FC<HelperTextComponentProps> = ({
  className, isInvalid, message, testId
}) => message && (
  <TypographyComponent
    className={cn('helperText', {
      additionalClassNames: className,
      modifiers: {
        isInvalid
      }
    })}
    component="span"
    testId={testId}
    variant='caption'
  >
    {message}
  </TypographyComponent>
);

export default HelperTextComponent;
