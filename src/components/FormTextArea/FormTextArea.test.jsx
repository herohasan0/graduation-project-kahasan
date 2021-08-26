import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FormTextArea } from './FormTextArea';

test('Component should render input title text', () => {
  const { getByText } = render(<FormTextArea inputTitle="Test" register={() => {}} />);
  getByText('Test');
});

test('TextArea should render its value correctly', () => {
  const { getByTestId } = render(<FormTextArea inputTitle="Test" register={() => {}} />);
  const textArea = getByTestId('form-textarea');
  fireEvent.change(textArea, { target: { value: 'Input Value Test' } });
  expect(textArea.value).toBe('Input Value Test');
});
