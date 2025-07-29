import { type ClassValue } from 'clsx';
import clsx from 'clsx';

import { capitalize } from '@/utils/capitalize-util';

type Modifier = boolean | number | string | null | undefined;
type Modifiers = Record<string, Modifier>;

const checkModifier = (value: unknown): value is string | number | true => (
  value !== false && value != null
);

const PREFIX: string = 'Dgn';

export const cn = (
  block: string,
  element?: string,
  modifiers?: Readonly<Modifiers>,
  additionalClassNames?: ClassValue
): string => {
  const blockWithPrefix = `${PREFIX}${capitalize(block)}`;
  const base = element ? `${blockWithPrefix}__${element}` : blockWithPrefix;

  const mods = Object.entries(modifiers ?? {})
    .filter(([, value]) => checkModifier(value))
    .map(([key, value]) =>
      value === true
        ? `${base}--${key}`
        : `${base}--${key}${capitalize(value as number | string)}`
    );

  return clsx(base, mods, additionalClassNames);
};
