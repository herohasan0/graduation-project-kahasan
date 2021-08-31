import React from 'react';
import { render } from '@testing-library/react';
import { AdminLayout } from './AdminLayout';

let rendered;
beforeEach(() => {
  rendered = render(
    <AdminLayout>
      <div>Admin.</div>
    </AdminLayout>
  );
});

afterEach(() => {
  rendered = null;
});

test('Component should render.', () => {
  rendered.getByTestId('admin-layout');
});

test('Component should render its children.', () => {
  rendered.getByText('Admin.');
});
