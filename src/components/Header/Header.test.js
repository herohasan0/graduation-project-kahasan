import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('Component should render and show text correctly', () => {
  const { getByText } = render(<Header title="Test" />);
  getByText('Test');
});

test('Component should include these items', () => {
  const { getByTestId } = render(<Header title="Test" />);
  getByTestId('profile-icon-header');
  getByTestId('text-header');
});
