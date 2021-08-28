/* eslint-disable react/no-children-prop */
import React from 'react';
import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

test('Component should render.', () => {
  const { getByTestId } = render(
    <Sidebar navTitle="Test">
      <div>Test</div>
    </Sidebar>
  );
  getByTestId('sidebar');
});
