import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LogoComponent from '@/components/main/logo-component';

describe('[components] LogoComponent', () => {
  it("should render the component as a <div> when linkProps aren't provided", () => {
    render(<LogoComponent testId="without_linkProps" />);

    const logoElement = screen.getByTestId('without_linkProps');

    expect(logoElement.tagName).toBe('DIV');
    expect(logoElement).toHaveClass('DgnLogo');
  });

  it('should render as anchor tag when linkProps are provided', () => {
    render(<LogoComponent linkProps={{ href: '/' }} testId='with_linkProps' />);

    const logoElement = screen.getByTestId('with_linkProps');
    expect(logoElement.tagName).toBe('A');
    expect(logoElement).toHaveAttribute('href', '/');
  });
});
