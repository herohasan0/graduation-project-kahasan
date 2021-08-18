/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Image } from '@chakra-ui/react';

export default function Cover({ imgUrl }) {
  return (
    <Box position="fixed">
      <Image src={imgUrl} h="fullH" />
    </Box>
  );
}

Cover.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};