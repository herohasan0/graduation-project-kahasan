import React from 'react';
import { render } from '@testing-library/react';
import { ListItem } from './ListItem';

test('Component should render.', () => {
  const { getByTestId } = render(
    <ListItem
      form={{
        firstName: 'Hasan',
        subject: 'Application',
        planetOfBirth: 'Earth',
        createdDate: '294431129131493',
        status: 'Pending',
      }}
    />
  );
  getByTestId('list-item');
});
