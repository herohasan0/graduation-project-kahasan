import React from 'react';
import { render } from '@testing-library/react';
import { StatusBar } from './StatusBar';

test('Component should render.', () => {
  const { getByTestId } = render(<StatusBar status="Pending" />);
  getByTestId('statusbar');
});
