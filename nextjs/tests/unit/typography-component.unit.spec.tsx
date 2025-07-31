import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TypographyComponent from '@/components/main/typography-component';
import { TypographyComponentProps, TypographyComponentType } from '@/types/props/typography-props';
import { capitalize } from '@/utils/capitalize-util';

describe('[components] TypographyComponent', () => {
  const defaultProps: TypographyComponentProps = {
    children: 'Lorem ipsum'
  };

  it('should render the component with default props', () => {
    render(<TypographyComponent {...defaultProps} />);

    const element = screen.getByText(defaultProps.children);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass(
      'DgnTypography',
      'DgnTypography--colorPrimary',
      'DgnTypography--variantBody',
      'DgnTypography--weightRegular'
    );
  });

  it('should handle a custom class', () => {
    render(<TypographyComponent {...defaultProps} className='Test' />);

    const element = screen.getByText(defaultProps.children);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Test');
  });

  it('should render different html elements based on component prop', () => {
    const components: TypographyComponentType[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'];

    components.forEach((component) => {
      const { unmount } = render(
        <TypographyComponent {...defaultProps} component={component} />
      );

      const element = screen.getByText(defaultProps.children);
      expect(element.tagName).toBe(component.toUpperCase());
      unmount();
    });
  });

  it('should generate variants', () => {
    const variants: NonNullable<TypographyComponentProps['variant']>[] = ['body', 'h4'];

    variants.forEach((variant) => {
      const { unmount } = render(
        <TypographyComponent {...defaultProps} variant={variant} />
      );

      const element = screen.getByText(defaultProps.children);
      expect(element).toHaveClass(`DgnTypography--variant${capitalize(variant as string)}`);
      unmount();
    });
  });

  it('should render correctly for each supported color', () => {
    const colors: TypographyComponentProps['color'][] = ['primary', 'secondary'];

    colors.forEach((color) => {
      const { unmount } = render(
        <TypographyComponent {...defaultProps} color={color} />
      );

      const element = screen.getByText(defaultProps.children);
      expect(element).toHaveClass(`DgnTypography--color${capitalize(color as string)}`);
      unmount();
    });
  });

  it('should display the correct style based on the weight prop', () => {
    const weights: TypographyComponentProps['weight'][] = ['bold', 'extra', 'medium', 'regular', 'semi'];

    weights.forEach((weight) => {
      const { unmount } = render(
        <TypographyComponent {...defaultProps} weight={weight} />
      );

      const element = screen.getByText(defaultProps.children);
      expect(element).toHaveClass(`DgnTypography--weight${capitalize(weight as string)}`);
      unmount();
    });
  });
});
