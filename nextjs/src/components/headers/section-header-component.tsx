import { FC } from 'react';

import TypographyComponent from '../main/typography-component';

import ChipComponent from '@/components/main/chip-component';
import RichTextComponent from '@/components/main/rich-text-component';
import { SectionHeaderComponentProps } from '@/types/props/section-header-props';
import { cn } from '@/utils/cn-util';

import '@/scss/section-header-component.scss';

const SectionHeaderComponent: FC<SectionHeaderComponentProps> = ({
  chipLabel, className, description, position = 'left', testId, title
}) => (
  <header
    className={cn('sectionHeader', {
      additionalClassNames: className,
      modifiers: {
        position
      }
    })}
    data-testid={testId}
  >
    {chipLabel && (
      <ChipComponent
        className={cn('sectionHeader', { element: 'chip' })}
        color='primary'
        content={chipLabel}
        typographyProps={{ variant: 'h6', weight: 'bold' }}
      />
    )}
    <RichTextComponent
      color='highlighted'
      variant='h1'
      weight='bold'
    >
      {title}
    </RichTextComponent>
    {description && (
      <TypographyComponent
        className={cn('sectionHeader', { element: 'description' })}
        variant='h4'
      >
        {description}
      </TypographyComponent>
    )}
  </header>
);

export default SectionHeaderComponent;
