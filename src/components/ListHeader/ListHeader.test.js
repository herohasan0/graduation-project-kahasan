import React from 'react';
import { render } from '@testing-library/react';
import { ListHeader } from './ListHeader';

test('Component should render.', () => {
  const { getByTestId } = render(<ListHeader />);
  getByTestId('list-header');
});
