import React, { useState } from 'react';

import {
  chakra, Flex, Image, Text, Box,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import { sidebarMinWidth, sidebarMaxWidth } from 'CONSTANS';

export default function Sidebar({ children, navTitle }) {
  const [width, setWidth] = useState(sidebarMaxWidth);

  const handleWidth = () => setWidth(width === sidebarMaxWidth ? sidebarMinWidth : sidebarMaxWidth);

  return (
    <Flex transition="0.5s" flexDir="column" w={`${width}px`} backgroundColor="black" color="white" h="fullH">
      <Flex justifyContent="space-between" pt={7.5} px={7.5}>
        {width > sidebarMinWidth && (
          <Text fontSize="lg">{navTitle}</Text>
        )}
        <Box cursor="pointer" w="1.5rem" h="1.5rem" onClick={handleWidth}>
          <Image w="1.5rem" maxW="initial" src="assets/icons/hamburger.png" />
        </Box>
      </Flex>
      <chakra.nav mt={15}>
        <Flex flexDir="column">
          {children}
        </Flex>
      </chakra.nav>
    </Flex>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  navTitle: PropTypes.string.isRequired,
};
