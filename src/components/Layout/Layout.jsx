import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Cover from 'components/Cover';
import { Flex, Image, Box } from '@chakra-ui/react';

export default function Layout({
  imgUrl, children, title, helperText,
}) {
  return (
    <Flex>
      <Flex w="half" px={32.5} flexDir="column" mt={32.5} mb={48}>
        <Flex mb={5} flexDir="column">
          <Link to="/">
            <Image src="./assets/images/logo.png" w="3xs" />
          </Link>

          {title && (
          <Box mt={10}>
            {title}
          </Box>
          )}

          {helperText && (
          <Box mt={10}>
            {helperText}
          </Box>
          )}

        </Flex>
        <Flex flexDir="column">{children}</Flex>
      </Flex>
      <Flex w="half">
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
  helperText: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node,
  ]),
  children: PropTypes.node.isRequired,
};
