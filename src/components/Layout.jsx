/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Cover from 'components/Cover';

import { Flex } from '@chakra-ui/react';

export default function Layout({ imgUrl, children }) {
  return (
    <Flex>
      <Flex w="half">{children}</Flex>
      <Flex w="half">
        <Cover imgUrl={imgUrl} />
      </Flex>
    </Flex>
  );
}

Layout.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
