import { REGEX } from '@/constants/regex-constants';

/**
 * Capitalizes the first letter of each word in a string.
 */
export const capitalize = (value: number | string): string => {
  const text = String(value).trim();

  return text.split(REGEX.WHITESPACE).map((word) =>
    word ? word[0].toUpperCase() + word.slice(1) : ''
  ).join(' ');
};
