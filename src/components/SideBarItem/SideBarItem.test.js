import React from 'react';
import { render } from '@testing-library/react';
import { SideBarItem } from './SideBarItem';

test('Component should render.', () => {
  const { getByTestId } = render(
    <SideBarItem title="Test" width={100} route="/admin" imgSrc="test" />
  );
  getByTestId('sidebar-item');
});
