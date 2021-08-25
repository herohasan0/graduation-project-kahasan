import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

export default function LinkSection() {
  return (
    <Flex alignItems="center" px="6" py="5.55">
      <Text>
        Home &gt;
        <Text as="span" fontWeight="bold"> Forms</Text>
      </Text>
    </Flex>
  );
}
