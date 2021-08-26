import React from 'react';
import { render } from '@testing-library/react';
import { HelperText } from './HelperText';

test('Component should render and show text correctly', () => {
  const { getByText } = render(<HelperText text="Test" />);
  getByText('Test');
});
