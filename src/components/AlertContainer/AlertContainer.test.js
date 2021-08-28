import React from 'react';
import { render } from '@testing-library/react';
import { statusVariant } from 'helpers/StatusVariant';
import { AlertContainer } from './AlertContainer';

test('Component should render.', () => {
  const { getByTestId } = render(
    <AlertContainer
      STATUS={statusVariant('Pending').status}
      ALERTTITLE="Sorry"
      ALERTDESCRIPTION="We cannot approve you."
    />
  );
  getByTestId('alert-container');
});
