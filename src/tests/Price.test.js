import React from 'react';
import { render } from '@testing-library/react';
import Price from '../containers/Price';

describe('Price container', () => {
  it('Renders Additional services header', () => {
    const { getByText } = render(<Price />);
    const linkElement = getByText(/Additional services/i);
    expect(linkElement).toBeInTheDocument();
  });
});
