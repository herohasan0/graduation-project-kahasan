import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FormSelect } from './FormSelect';

test('Component should render select element', () => {
  const { getByTestId } = render(<FormSelect />);
  getByTestId('form-select');
});

test('Component should render select title text', () => {
  const { getByText } = render(<FormSelect inputTitle="Test" />);
  getByText('Test');
});

test('Component should render helper text', () => {
  const { getByText } = render(<FormSelect helperText="Helper text content" />);
  getByText('Helper text content');
});

test('Component should render correct its options length', () => {
  const { getByTestId } = render(
    <FormSelect>
      <option>option-1</option>
      <option>option-2</option>
    </FormSelect>
  );
  const select = getByTestId('form-select');
  expect(select.options.length).toBe(2);
});

test('Component should render when select has a value', () => {
  const { getByTestId } = render(
    <FormSelect value="Earth">
      <option value="earth">Earth</option>
    </FormSelect>
  );
  const select = getByTestId('form-select');
  expect(select.value).toBe('earth');
});

test('Component should render error message when has a error', () => {
  const { getByText } = render(
    <FormSelect
      errors={{ place: { message: 'This is a required field' } }}
      label="place"
    />
  );
  getByText('This is a required field');
});

test('Input should render its value correctly when option change', () => {
  const { getByTestId } = render(
    <FormSelect inputTitle="Test">
      <option value="earth">Earth</option>
      <option value="magrathea">Magrathea</option>
      <option value="nowwhat">NowWhat</option>
    </FormSelect>
  );
  const select = getByTestId('form-select');
  fireEvent.change(select, { target: { value: 'magrathea' } });
  expect(select.value).toBe('magrathea');
});
