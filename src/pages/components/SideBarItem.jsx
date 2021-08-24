import React from 'react';

import { Link } from 'react-router-dom';

import { Flex, Image, Text } from '@chakra-ui/react';

import { sidebarMinWidth } from 'CONSTANS';

import PropTypes from 'prop-types';

export default function SideBarItem({
  title, width, route, imgSrc,
}) {
  return (
    <Link to={route}>
      <Flex alignItems="center" h="48px" _hover={{ backgroundColor: 'hover.black' }} py={3} pl="31px">
        <Image w="21px" h="21px" src={imgSrc} />
        {width > sidebarMinWidth && (
        <Text transition="0.5s" ml="5px">{title}</Text>
        )}
      </Flex>
    </Link>
  );
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
