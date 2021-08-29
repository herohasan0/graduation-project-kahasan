import React from 'react';
import { ListItem } from 'components';
import { Tbody } from '@chakra-ui/react';
import { getForms } from 'services/firestore';

export function FormList() {
  const forms = getForms();

  return (
    <>
      <Tbody>
        {forms && forms.map((form) => <ListItem key={form.id} form={form} />)}
      </Tbody>
    </>
  );
}
