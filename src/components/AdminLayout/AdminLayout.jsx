import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useToggle } from 'hooks/useToggle';
import { LIST } from 'navigation/CONSTANTS';
import { Flex, Divider } from '@chakra-ui/react';
import { useWindowSize } from 'hooks/useWindowSize';
import { Sidebar, SideBarItem, StatusCard, Header, Logout } from 'components';
import { sidebarMinWidth, sidebarMaxWidth, sidebarToggledSize } from 'CONSTANS';

import {
  getApplicationCount,
  getTotalApplicationCount,
} from 'services/firestore';

export function AdminLayout({ children }) {
  const size = useWindowSize();
  const [width, setWidth] = useState(sidebarMaxWidth);
  const [opened, setIsOpened] = useToggle();

  useEffect(() => {
    if (size.width < sidebarToggledSize) {
      setWidth(sidebarMinWidth);
    } else {
      setWidth(sidebarMaxWidth);
    }
  }, [size]);

  useEffect(() => {
    if (size.width > sidebarToggledSize) {
      if (opened) {
        setWidth(sidebarMinWidth);
      } else {
        setWidth(sidebarMaxWidth);
      }
    }
  }, [opened]);

  const totalApplicationCount = getTotalApplicationCount();
  const totalPendingCount = getApplicationCount('Pending');
  const totalApprovedCount = getApplicationCount('Approved');
  const totalCancelledCount = getApplicationCount('Cancelled');

  return (
    <Flex data-testid="admin-layout">
      {/* Side navigation bar */}
      <Sidebar navTitle="Admin." handleWidth={setIsOpened} width={width}>
        <SideBarItem
          title="Forms"
          width={width}
          imgSrc="/assets/icons/file.png"
          route={LIST}
          selected
        />
        <Logout width={width} />
      </Sidebar>

      <Flex flexDir="column" pt="5.55" w="full">
        {/* Header section */}
        <Header title="Forms" />
        <Divider mt="5.55" />

        <Flex
          // h="100vh"
          h={{ '2lg': 'calc(100vh - 6rem)' }}
          pb={{ base: '100px', '2lg': '0' }}
          backgroundColor="gray.background_1"
          px="6"
          flexDir="column"
        >
          {/* Status Section */}
          <Flex mt="7.5" w="full" justifyContent="space-between">
            <StatusCard
              imgSrc="/assets/icons/total-application.png"
              count={totalApplicationCount}
              status="Total Application"
            />
            <StatusCard
              imgSrc="/assets/icons/pending-application.png"
              count={totalPendingCount}
              status="Pending Application"
            />
            <StatusCard
              imgSrc="/assets/icons/approved-application.png"
              count={totalApprovedCount}
              status="Approved Application"
              display={{ base: 'none', md: 'flex' }}
            />
            <StatusCard
              imgSrc="/assets/icons/cancelled-application.png"
              count={totalCancelledCount}
              status="Cancelled Application"
              display={{ base: 'none', '2sm': 'flex' }}
            />
          </Flex>

          {/* Main List */}
          <Flex
            mt="7.5"
            w="full"
            backgroundColor="white"
            borderRadius="lg"
            pt="8"
            px="8"
            flexDir="column"
          >
            {/* Main List Row Items Will be Here */}
            {children}
          </Flex>

          <Flex />
        </Flex>
      </Flex>
    </Flex>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
