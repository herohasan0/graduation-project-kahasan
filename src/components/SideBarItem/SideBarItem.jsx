import React from 'react';
import PropTypes from 'prop-types';
import { sidebarMinWidth } from 'CONSTANS';
import { Flex, Image, Text, Link } from '@chakra-ui/react';

export function SideBarItemContext({ title, width, route, imgSrc, selected }) {
  return (
    <Link to={route}>
      <Flex
        data-testid="sidebar-item"
        alignItems="center"
        h="48px"
        _hover={{ backgroundColor: 'hover.black' }}
        py={3}
        pl="31px"
        backgroundColor={selected && 'hover.black'}
      >
        <Image w="21px" h="21px" src={imgSrc} />
        {width > sidebarMinWidth && (
          <Text transition="0.5s" ml="5px">
            {title}
          </Text>
        )}
      </Flex>
    </Link>
  );
}

export const SideBarItem = React.memo(SideBarItemContext);

SideBarItemContext.defaultProps = {
  selected: undefined,
};

SideBarItemContext.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};
