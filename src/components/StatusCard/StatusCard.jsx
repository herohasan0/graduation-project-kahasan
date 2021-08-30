import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Image } from '@chakra-ui/react';

export function StatusCard({ imgSrc, status, count, display }) {
  return (
    <Flex
      display={display}
      data-testid="statuscard"
      backgroundColor="white"
      p="5.5"
      borderRadius="lg"
      alignItems="center"
    >
      <Image
        display={{ base: 'none', '2lg': 'block' }}
        w="small"
        h="small"
        src={imgSrc}
      />
      <Flex flexDir="column" ml={{ '2lg': '3' }}>
        <Text fontWeight="bold" fontSize="lg">
          {count}
        </Text>
        <Text fontSize="sm">{status}</Text>
      </Flex>
    </Flex>
  );
}

StatusCard.defaultProps = {
  display: { base: 'flex' },
  count: 0,
};

StatusCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  count: PropTypes.number,
  display: PropTypes.shape({}),
};
