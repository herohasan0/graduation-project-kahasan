import React, { useState } from 'react';

import {
  Flex, Divider,
} from '@chakra-ui/react';

import Sidebar from 'components/Sidebar';
import SideBarItem from 'pages/components/SideBarItem';

import { sidebarMinWidth, sidebarMaxWidth } from 'CONSTANS';
import StatusCard from './components/StatusCard';
import Header from './components/Header';
import LinkSection from './components/LinkSection';
import ListItem from './components/ListItem';
import ListHeader from './components/ListHeader';

export default function AdminLayout() {
  const [width, setWidth] = useState(sidebarMaxWidth);
  const handleWidth = () => setWidth(width === sidebarMaxWidth ? sidebarMinWidth : sidebarMaxWidth);
  return (
    <Flex>

      {/* Side navigation bar */}
      <Sidebar navTitle="Admin." handleWidth={handleWidth} width={width}>
        <SideBarItem width={width} route="/forms" imgSrc="/assets/icons/file.png" />
      </Sidebar>

      {/* Whole screen except sidebar */}
      <Flex flexDir="column" pt="5.55" w="full">

        {/* Header section */}
        <Header title="Forms" />
        <Divider mt="5.55" />
        <LinkSection />

        <Flex h="full" backgroundColor="gray.background_1" px="6" flexDir="column">

          {/* Status Section */}
          <Flex mt="7.5" w="full" justifyContent="space-between">
            <StatusCard imgSrc="/assets/icons/approved-application.png" count="103" status="Bekleyen başvurular" />
            <StatusCard imgSrc="/assets/icons/cancelled-application.png" count="13" status="Cancelled Application" />
            <StatusCard imgSrc="/assets/icons/total-application.png" count="145" status="Toplam başvurular" />
            <StatusCard imgSrc="/assets/icons/cancelled-application.png" count="13" status="Cancelled Application" />
          </Flex>

          {/* Main List */}
          <Flex mt="7.5" w="full" backgroundColor="white" borderRadius="lg" pt="8" px="8" flexDir="column">
            <ListHeader />
            <Divider mt="2.5" />

            {/* Main List Row Items Will be Here */}
            <Flex flexDir="column" h="24.375rem" overflowY="scroll" mb="2.5">
              <ListItem applyBy="Hasan K." subject="Citizenship Application" from="Earth" status="Cancelled" createdDate="11/03/2018" />
            </Flex>
          </Flex>

          <Flex />
        </Flex>
      </Flex>
    </Flex>
  );
}
