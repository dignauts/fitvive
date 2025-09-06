import { BaseComponentProps } from '@/types/props/common-props';

export type ProgramItemProps = {
  description: string;
  href?: null | string;
  icon?: null | string;
  title: string;
}

export type ProgramItemComponentProps = BaseComponentProps & ProgramItemProps;
