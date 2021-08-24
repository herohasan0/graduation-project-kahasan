/* eslint-disable react/prop-types */
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

export default function AdminLayout({ children }) {
  const [width, setWidth] = useState(sidebarMaxWidth);
  const handleWidth = () => setWidth(width === sidebarMaxWidth ? sidebarMinWidth : sidebarMaxWidth);
  return (
    <Flex>

      {/* Side navigation bar */}
      <Sidebar navTitle="Admin." handleWidth={handleWidth} width={width}>
        <SideBarItem title="Forms" width={width} route="/admin/basvuru-listesi/forms" imgSrc="/assets/icons/file.png" />
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
            <StatusCard imgSrc="/assets/icons/total-application.png" count="145" status="Total Application" />
            <StatusCard imgSrc="/assets/icons/pending-application.png" count="103" status="Pending Application" />
            <StatusCard imgSrc="/assets/icons/approved-application.png" count="13" status="Approved Application" />
            <StatusCard imgSrc="/assets/icons/cancelled-application.png" count="13" status="Cancelled Application" />
          </Flex>

          {/* Main List */}
          <Flex mt="7.5" w="full" backgroundColor="white" borderRadius="lg" pt="8" px="8" flexDir="column">

            {/* Main List Row Items Will be Here */}
            {children}
          </Flex>

          <Flex />
        </Flex>
      </Flex>
    </Flex>
  );
}
