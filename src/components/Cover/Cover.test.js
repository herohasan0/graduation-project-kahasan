import React from 'react';
import { render } from '@testing-library/react';
import { Cover } from './Cover';

test('Component should render and image in component should render', () => {
  const { getByTestId } = render(<Cover imgUrl="Test" />);
  getByTestId('cover-image');
});
