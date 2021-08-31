import React from 'react';
import { render } from '@testing-library/react';
import { FormProvider } from 'contexts/formContext';
import { FORMINPUTVALUES, FORMTEXTAREAVALUES } from 'config/languages/en';
import { ApplicationForm } from './ApplicationForm';

let rendered;
beforeEach(() => {
  rendered = render(
    <FormProvider>
      <ApplicationForm />
    </FormProvider>
  );
});

afterEach(() => {
  rendered = null;
});

test('Component should render.', () => {
  rendered.getByTestId('application-form');
});

test('Component should render a button.', () => {
  rendered.getByTestId('mybutton');
});

test('Component should render only one button.', () => {
  const myButton = rendered.getAllByTestId('mybutton').length;
  expect(myButton).toEqual(1);
});

test('Component should render input component.', () => {
  rendered.getAllByTestId('form-input');
});

test('Component should render input component amount of given object.', () => {
  const formInput = rendered.getAllByTestId('form-input').length;
  expect(formInput).toEqual(FORMINPUTVALUES.length);
});

test('Component should render textarea component.', () => {
  rendered.getAllByTestId('form-textarea');
});

test('Component should render textarea component amount of given object.', () => {
  const formTextarea = rendered.getAllByTestId('form-textarea').length;
  expect(formTextarea).toEqual(FORMTEXTAREAVALUES.length);
});

test('Component should render select component.', () => {
  rendered.getAllByTestId('form-select');
});
