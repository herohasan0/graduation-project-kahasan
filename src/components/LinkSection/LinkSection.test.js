import React from 'react';
import { render } from '@testing-library/react';
import { LinkSection } from './LinkSection';

test('Component should render', () => {
  const { getByTestId } = render(<LinkSection />);
  getByTestId('breadcrumb');
});
