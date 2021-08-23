import React, { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import Sidebar from 'components/Sidebar';
import SideBarItem from 'pages/components/SideBarItem';

import { sidebarMinWidth, sidebarMaxWidth } from 'CONSTANS';

export default function AdminLayout() {
  const [width, setWidth] = useState(sidebarMaxWidth);
  const handleWidth = () => setWidth(width === sidebarMaxWidth ? sidebarMinWidth : sidebarMaxWidth);
  return (
    <Flex>
      <Sidebar navTitle="Admin." handleWidth={handleWidth} width={width}>
        <SideBarItem width={width} route="/forms" imgSrc="/assets/icons/file.png" />
      </Sidebar>
    </Flex>
  );
}
