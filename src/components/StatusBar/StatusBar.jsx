import React from 'react';

import { Center, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export function StatusBar({ status }) {
  let color;
  switch (status) {
    case 'Pending':
      color = 'orange';
      break;
    case 'Approved':
      color = 'green';
      break;
    case 'Cancelled':
      color = 'red';
      break;
    default:
      break;
  }
  return (
    <Center backgroundColor={`${color}.background`} px="4" py="1.5" borderRadius="4xl">
      <Text color={`${color}.color`}>
        {status}
      </Text>
    </Center>
  );
}

StatusBar.propTypes = {
  status: PropTypes.string.isRequired,
};