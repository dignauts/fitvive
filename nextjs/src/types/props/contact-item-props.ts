import { WithIdentifier } from '@/types/generics-types';
import { BaseComponentProps } from '@/types/props/common-props';
import { LabeledComponentProps } from '@/types/props/labeled-props';

export type ContactItemProps = WithIdentifier<{
  value: string;
} & Pick<ContactItemComponentProps, 'label' | 'type'>>;

export type ContactItemIconType = 'clock' | 'envelope' | 'marker' | 'phone';

export interface ContactItemComponentProps
  extends BaseComponentProps, Pick<LabeledComponentProps, 'label'> {
  children: string;
  type: ContactItemIconType;
}
