/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import {
  SUBMITTEDALERTTITLE,
  SUBMITTEDALERTDESCRIPTION,
  ALERTIDMESSAGE,
  WARNINGMESSAGE,
} from 'config/languages/en';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SuccessPage } from './SuccessPage';

let history;
beforeAll(() => {
  history = createMemoryHistory();
  history.push({
    state: {
      dataid: 'Test ID',
    },
  });
});

let GetByText;
beforeEach(() => {
  GetByText = render(
    <Router history={history}>
      <SuccessPage />
    </Router>
  ).getByText;
});

afterEach(() => {
  GetByText = null;
});

test('Component should render SUBMITTEDALERTTITLE.', () => {
  GetByText(SUBMITTEDALERTTITLE);
});

test('Component should render SUBMITTEDALERTDESCRIPTION.', () => {
  GetByText(SUBMITTEDALERTDESCRIPTION);
});

test('Component should render ALERTIDMESSAGE and test id from history state.', () => {
  GetByText(`${ALERTIDMESSAGE}Test ID`);
});

test('Component should render WARNINGMESSAGE.', () => {
  GetByText(WARNINGMESSAGE);
});
