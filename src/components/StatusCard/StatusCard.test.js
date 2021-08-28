import React from 'react';
import { render } from '@testing-library/react';
import { StatusCard } from './StatusCard';

test('Component should render.', () => {
  const { getByTestId } = render(
    <StatusCard imgSrc="test" status="Pending" count={5} />
  );
  getByTestId('statuscard');
});
