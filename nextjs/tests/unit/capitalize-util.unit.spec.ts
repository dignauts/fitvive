import { describe, it, expect } from 'vitest';

import { capitalize } from '@/utils/capitalize-util';

describe('[utils] capitalize', () => {
  it('should capitalize the first letter of each word in a simple string', () => {
    expect(capitalize('hello world')).toBe('Hello World');
  });

  it('should trim the input string before capitalizing', () => {
    expect(capitalize(' leading and trailing ')).toBe('Leading And Trailing');
  });

  it('should correctly capitalize a single-word input', () => {
    expect(capitalize('test')).toBe('Test');
  });

  it('should handle input containing multiple spaces', () => {
    expect(capitalize('multiple   spaces')).toBe('Multiple Spaces');
  });

  it('should return an empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('should convert numeric input to a string', () => {
    expect(capitalize(2025)).toBe('2025');
  });

  it('should handle mixed numeric and string input', () => {
    expect(capitalize('dignauts 2025')).toBe('Dignauts 2025');
  });

  it("shouldn't modify already capitalized words", () => {
    expect(capitalize('Dignauts')).toBe('Dignauts');
  });
});
