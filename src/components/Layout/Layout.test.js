import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

test('Component should render.', () => {
  const { getByTestId } = render(<Layout />);
  getByTestId('layout');
});
