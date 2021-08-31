import React from 'react';
import ConvertDate from 'helpers/ConvertDate';
import { Tbody, Table } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { ListItem } from './ListItem';

let rendered;
beforeEach(() => {
  rendered = render(
    <Table>
      <Tbody>
        <ListItem
          form={{
            firstName: 'Hasan',
            id: 'testid',
            subject: 'Application',
            planetOfBirth: 'Earth',
            status: 'Pending',
            createdDate: { seconds: 1630358671 },
          }}
        />
      </Tbody>
    </Table>
  );
});

afterEach(() => {
  rendered = null;
});

test('Component should render.', () => {
  rendered.getByTestId('list-item');
});

test('Component should render first name.', () => {
  rendered.getByText('Hasan');
});

test('Component should render subject.', () => {
  rendered.getByText('Application');
});

test('Component should render planet of birth.', () => {
  rendered.getByText('Earth');
});

test('Component should render application status.', () => {
  rendered.getByText('Pending');
});

test('Component should render application created date.', () => {
  rendered.getByText(ConvertDate(1630358671));
});

test('Component should render edit button.', () => {
  rendered.getByTestId('list-edit');
});
