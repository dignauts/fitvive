import { describe, it, expect } from 'vitest';

import { cn } from '@/utils/cn-util';

describe('[utils] cn', () => {
  it('should return only the base block (including the prefix)', () => {
    expect(cn('button')).toBe('DgnButton');
  });

  it('should return block with the given element', () => {
    expect(cn('button', { element: 'icon' })).toBe('DgnButton__icon');
  });

  it('should add modifiers whose values are true', () => {
    expect(cn('button', {
      modifiers: {
        active: true,
        disabled: false
      }
    })).toBe('DgnButton DgnButton--active');
  });

  it('should add modifiers whose values are strings', () => {
    expect(cn('button', { element: 'icon', modifiers: { size: 'large' } })).toBe(
      'DgnButton__icon DgnButton__icon--sizeLarge'
    );
  });

  it('should ignore modifiers with values of false, null or undefined', () => {
    expect(cn('button', {
      modifiers: {
        active: true,
        visible: false,
        theme: null,
        loading: undefined
      }
    })).toBe('DgnButton DgnButton--active');
  });

  it('should combine base, modifiers and additional class names', () => {
    expect(
      cn('button', {
        element: 'icon',
        modifiers: {
          size: 'small',
          active: true
        },
        additionalClassNames: 'px-4 py-2'
      })
    ).toBe('DgnButton__icon DgnButton__icon--sizeSmall DgnButton__icon--active px-4 py-2');
  });

  it('should return the base block when all modifiers are false', () => {
    expect(cn('button', {
      modifiers: {
        hidden: false,
        disabled: null,
        selected: undefined
      }
    })).toBe('DgnButton');
  });
});
