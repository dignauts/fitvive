import { RichText } from '@payloadcms/richtext-lexical/react';
import { FC } from 'react';

import { RichTextComponentProps } from '@/types/props/rich-text-props';
import { cn } from '@/utils/cn-util';
import '@/scss/rich-text-component.scss';

const RichTextComponent: FC<RichTextComponentProps> = ({
  children, className, color = 'highlighted', variant = 'body', weight = 'regular'
}) => (
  <RichText
    className={cn('richText', {
      additionalClassNames: className,
      modifiers: {
        color,
        variant,
        weight
      }
    })}
    data={children}
  />
);

export default RichTextComponent;
