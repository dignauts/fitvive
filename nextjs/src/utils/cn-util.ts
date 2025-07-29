import { type ClassValue } from 'clsx';
import clsx from 'clsx';

import { capitalize } from '@/utils/capitalize-util';

type Modifier = boolean | number | string | null | undefined;
type Modifiers = Record<string, Modifier>;

type CnOptions = {
  element?: string;
  modifiers?: Readonly<Modifiers>;
  additionalClassNames?: ClassValue;
}

const checkModifier = (value: unknown): value is string | number | true => (
  value !== false && value != null
);

const PREFIX: string = 'Dgn';

export const cn = (
  block: string,
  options?: CnOptions
): string => {
  const blockWithPrefix = `${PREFIX}${capitalize(block)}`;
  const base = options?.element ? `${blockWithPrefix}__${options?.element}` : blockWithPrefix;

  const mods = Object.entries(options?.modifiers ?? {})
    .filter(([, value]) => checkModifier(value))
    .map(([key, value]) =>
      value === true
        ? `${base}--${key}`
        : `${base}--${key}${capitalize(value as number | string)}`
    );

  return clsx(base, mods, options?.additionalClassNames);
};
