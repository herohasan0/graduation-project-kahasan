import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';
import { ListHeader } from './ListHeader';

let rendered;
beforeEach(() => {
  rendered = render(
    <Table>
      <ListHeader text="Test" />
    </Table>
  );
});

afterEach(() => {
  rendered = null;
});

test('Component should render.', () => {
  rendered.getByTestId('list-header');
});

test('Component should render and there should be only one table head row', () => {
  const headRow = rendered.getAllByTestId('list-header-row').length;
  expect(headRow).toEqual(1);
});
