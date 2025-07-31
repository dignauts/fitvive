import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import BaseIconComponent from '@/components/icons/base-icon-component';

describe('[components] BaseIconComponent', () => {
  it('should render svg with attributes', () => {
    const { container } = render(
      <BaseIconComponent
        className="myCustomClass"
        fill="none"
        height={24}
        viewBox='0 0 24 24'
        width={24}
      />
    );

    const svg = container.querySelector('svg');

    expect(svg).toBeTruthy();
    expect(svg).toHaveClass('myCustomClass');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('should render children inside the SVG element', () => {
    const { container } = render(
      <BaseIconComponent>
        <path
          d="M13.2375 8.78241L8.7825 13.2374C9.34859 13.8032 10.1965 14.6516 10.7625 15.2174L15.2175 10.7624C14.8984 10.4346 13.2375 8.78241 13.2375 8.78241Z"
          fill="black"
        />
      </BaseIconComponent>
    );

    const children = container.querySelectorAll('path');
    expect(children.length).toBeGreaterThan(0);
  });
});
