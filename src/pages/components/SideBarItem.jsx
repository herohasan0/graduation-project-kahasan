import React from 'react';

import { Link } from 'react-router-dom';

import { Flex, Image, Text } from '@chakra-ui/react';

import { sidebarMinWidth } from 'CONSTANS';

import PropTypes from 'prop-types';

export default function SideBarItem({ width, route }) {
  return (
    <Link to={route}>
      <Flex alignItems="center" h="48px" _hover={{ backgroundColor: 'hover.black' }} py={3} pl="31px">
        <Image w="21px" h="21px" src="assets/icons/file.png" />
        {width > sidebarMinWidth && (
        <Text transition="0.5s" ml="5px">Forms</Text>
        )}
      </Flex>
    </Link>
  );
}

SideBarItem.propTypes = {
  width: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
};
