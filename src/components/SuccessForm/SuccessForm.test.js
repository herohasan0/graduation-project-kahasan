import React from 'react';
import { render } from '@testing-library/react';
import { SuccessForm } from './SuccessForm';

test('Component should render.', () => {
  const { getByTestId } = render(
    <SuccessForm formValue={{ status: 'Pending' }} />
  );
  getByTestId('success-form');
});
