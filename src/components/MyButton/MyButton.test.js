import React from 'react';
import { render } from '@testing-library/react';
import { MyButton } from './MyButton';

test('Component should render.', () => {
  const { getByTestId } = render(<MyButton />);
  getByTestId('mybutton');
});
