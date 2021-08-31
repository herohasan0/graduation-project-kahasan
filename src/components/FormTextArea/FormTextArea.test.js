import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FormTextArea } from './FormTextArea';

test('Component should render input title text', () => {
  const { getByText } = render(
    <FormTextArea inputTitle="Test" register={() => {}} />
  );
  getByText('Test');
});

test('Component should render helper text', () => {
  const { getByText } = render(
    <FormTextArea helperText="Helper text content" />
  );
  getByText('Helper text content');
});

test('Component should render when textarea has a value', () => {
  const { getByTestId } = render(
    <FormTextArea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis eleifend tortor nec faucibus. Vestibulum ut pretium nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
  );
  const textarea = getByTestId('form-textarea');
  expect(textarea.value).toBe(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis eleifend tortor nec faucibus. Vestibulum ut pretium nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  );
});

test('Component should render error message when has a error', () => {
  const { getByText } = render(
    <FormTextArea
      errors={{ address: { message: 'This is a required field' } }}
      label="address"
    />
  );
  getByText('This is a required field');
});

test('TextArea should render its value correctly', () => {
  const { getByTestId } = render(
    <FormTextArea inputTitle="Test" register={() => {}} />
  );
  const textArea = getByTestId('form-textarea');
  fireEvent.change(textArea, { target: { value: 'Input Value Test' } });
  expect(textArea.value).toBe('Input Value Test');
});
