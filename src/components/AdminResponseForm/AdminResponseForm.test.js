/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { FormProvider } from 'contexts/formContext';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AdminResponseForm } from './AdminResponseForm';

let history;
beforeAll(() => {
  history = createMemoryHistory();
  history.push({
    state: { result: { adminNoted: 'Well Done' } },
  });
});

test('Component should render.', () => {
  const { getByTestId } = render(
    <FormProvider>
      <Router history={history}>
        <AdminResponseForm />
      </Router>
    </FormProvider>
  );
  getByTestId('admin-response-form');
});

test('Component should render state content.', () => {
  const { getByText } = render(
    <FormProvider>
      <Router history={history}>
        <AdminResponseForm />
      </Router>
    </FormProvider>
  );
  getByText('Well Done');
});
