import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FormInput } from './FormInput';

test('Component should render input title text', () => {
  const { getByText } = render(<FormInput inputTitle="Test" />);
  getByText('Test');
});

test('Component should render helper text', () => {
  const { getByText } = render(<FormInput helperText="Helper text content" />);
  getByText('Helper text content');
});

test('Component should render when input has a value', () => {
  const { getByTestId } = render(<FormInput value="Hasan Kahraman" />);
  const input = getByTestId('form-input');
  expect(input.value).toBe('Hasan Kahraman');
});

test('Component should render error message when has a error', () => {
  const { getByText } = render(
    <FormInput
      errors={{ username: { message: 'The is no user with this username' } }}
      label="username"
    />
  );
  getByText('The is no user with this username');
});

test('Input should render its value correctly', () => {
  const { getByTestId } = render(<FormInput inputTitle="Test" />);
  const input = getByTestId('form-input');
  fireEvent.change(input, { target: { value: 'Input Value Test' } });
  expect(input.value).toBe('Input Value Test');
});
