import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FormInput } from './FormInput';

test('Component should render input title text', () => {
  const { getByText } = render(<FormInput inputTitle="Test" />);
  getByText('Test');
});

test('Input should render its value correctly', () => {
  const { getByTestId } = render(<FormInput inputTitle="Test" />);
  const input = getByTestId('form-input');
  fireEvent.change(input, { target: { value: 'Input Value Test' } });
  expect(input.value).toBe('Input Value Test');
});
