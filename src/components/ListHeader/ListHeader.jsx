import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

export function ListHeader() {
  return (
    <Flex w="full" fontSize="sm" color="gray.title" data-testid="list-header">
      <Text w="227px">Apply by</Text>
      <Text w="275px">Subject</Text>
      <Text w="166px">From</Text>
      <Text w="216px">Status</Text>
      <Text w="193px">Create Date</Text>
      <Text>Action</Text>
    </Flex>
  );
}
