/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Cover from 'components/Cover';

import { Flex, Image, Box } from '@chakra-ui/react';

export default function Layout({
  imgUrl, children, title, helperText,
}) {
  return (
    <Flex>
      <Flex w="half" px={32.5} flexDir="column" mt={32.5} mb={48}>
        <Flex mb={5} flexDir="column">
          <Image src="./assets/images/logo.png" w="3xs" />
          <Box mt={10}>
            {title}
          </Box>
          <Box mt={10}>
            {helperText}
          </Box>
        </Flex>
        <Flex>{children}</Flex>
      </Flex>
      <Flex w="half">
        <Cover imgUrl={imgUrl} />
      </Flex>
    </Flex>
  );
}

Layout.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
