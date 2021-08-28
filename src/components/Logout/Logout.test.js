import React from 'react';
import { render } from '@testing-library/react';
import { Logout } from './Logout';

test('Component should render.', () => {
  const { getByTestId } = render(<Logout />);
  getByTestId('logout');
});
