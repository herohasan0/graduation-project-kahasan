import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('Component should render.', () => {
  const { getByTestId } = render(<App />);
});
