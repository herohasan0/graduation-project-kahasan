import React from 'react';
import { render } from '@testing-library/react';
import { Title } from './Title';

test('Component should render and show text correctly', () => {
  const { getByText } = render(<Title title="Test" />);
  getByText('Test');
});
