import React from 'react';
import PropTypes from 'prop-types';
import { sidebarMinWidth } from 'CONSTANS';
import { chakra, Flex, Image, Text, Box } from '@chakra-ui/react';

export function SidebarContext({ children, navTitle, handleWidth, width }) {
  return (
    <Flex
      display={{ base: 'none', '2md': 'block' }}
      data-testid="sidebar"
      transition="0.5s"
      flexDir="column"
      w={`${width}px`}
      backgroundColor="black"
      color="white"
      h="fullH"
    >
      <Flex justifyContent="space-between" pt={7.5} px={7.5}>
        {width > sidebarMinWidth && <Text fontSize="lg">{navTitle}</Text>}
        <Box cursor="pointer" w="1.5rem" h="1.5rem" onClick={handleWidth}>
          <Image w="1.5rem" maxW="initial" src="/assets/icons/hamburger.png" />
        </Box>
      </Flex>
      <chakra.nav mt={15}>
        <Flex flexDir="column">{children}</Flex>
      </chakra.nav>
    </Flex>
  );
}

export const Sidebar = React.memo(SidebarContext);

SidebarContext.defaultProps = {
  width: '',
  handleWidth: undefined,
};

SidebarContext.propTypes = {
  children: PropTypes.node.isRequired,
  navTitle: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleWidth: PropTypes.func,
};
