import React from 'react';
import { render } from '@testing-library/react';
import { AdminLayout } from './AdminLayout';

test('Component should render.', () => {
  const { getByTestId } = render(<AdminLayout />);
  getByTestId('admin-layout');
});
