import React from 'react';
import { ListItem } from 'components';
import { getForms } from 'services/firestore';
import { Flex } from '@chakra-ui/react';

export default function FormList() {
  const forms = getForms();

  return (
    <>
      <Flex flexDir="column" h="24.375rem" overflowY="scroll" mb="2.5">
        {
        forms && forms.map((form) => (
          <ListItem
            key={form.id}
            form={form}
          />
        ))
      }
      </Flex>
    </>
  );
}
