import React from 'react';
import ListItem from 'components/Layout/components/ListItem';
import { getForms } from 'services/firestore';
import ConvertDate from 'helper/ConvertDate';
import { Flex } from '@chakra-ui/react';

export default function FormList() {
  const forms = getForms();

  return (
    <>
      <Flex flexDir="column" h="24.375rem" overflowY="scroll" mb="2.5">
        {
        forms && forms.map(({
          id, firstName, subject, planetOfBirth, status, createdDate,
        }) => (
          <ListItem
            key={id}
            id={id}
            applyBy={firstName}
            subject={subject}
            from={planetOfBirth}
            status={status}
            createdDate={ConvertDate(createdDate.seconds)}
          />
        ))
      }
      </Flex>
    </>
  );
}
