import React from 'react';
import { render } from '@testing-library/react';
import { FormSelect } from './FormSelect';

test('Component should render input title text', () => {
  const { getByTestId } = render(<FormSelect />);
  getByTestId('form-select');
});
