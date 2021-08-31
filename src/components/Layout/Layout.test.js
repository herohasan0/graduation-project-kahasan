import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

let rendered;
beforeEach(() => {
  rendered = render(
    <Layout imgUrl="Test" title="Test Title" helperText="Test Helper Text">
      <div>Test</div>
    </Layout>
  );
});

afterEach(() => {
  rendered = null;
});

test('Component should render.', () => {
  rendered.getByTestId('layout');
});

test('Component should render children component.', () => {
  rendered.getByText('Test');
});

test('Component should render title text.', () => {
  rendered.getByText('Test Title');
});

test('Component should render helper text.', () => {
  rendered.getByText('Test Helper Text');
});
