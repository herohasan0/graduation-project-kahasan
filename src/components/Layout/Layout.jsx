import React from 'react';
import PropTypes from 'prop-types';
import { Cover } from 'components';
import { useHistory } from 'react-router-dom';
import { Flex, Image, Box } from '@chakra-ui/react';

export function Layout({ imgUrl, children, title, helperText }) {
  const history = useHistory();

  return (
    <Flex data-testid="layout">
      <Flex
        h="760px"
        overflowY="scroll"
        w={{ base: 'full', lg: 'half' }}
        px={{ base: '20px', md: '140px', lg: '32.5' }}
        flexDir="column"
        pt={32.5}
        pb={48}
      >
        <Flex mb={5} flexDir="column">
          <Box onClick={() => history.push({ pathname: '/' })} cursor="pointer">
            <Image src="/assets/images/logo.png" w="3xs" />
          </Box>

          {title && <Box mt={10}>{title}</Box>}

          {helperText && <Box mt={10}>{helperText}</Box>}
        </Flex>
        <Flex flexDir="column">{children}</Flex>
      </Flex>

      <Flex display={{ base: 'none', lg: 'block' }} w="half">
        <Cover imgUrl={imgUrl} />
      </Flex>
    </Flex>
  );
}

Layout.defaultProps = {
  helperText: '',
  title: '',
};

Layout.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
};
