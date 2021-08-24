import React from 'react';
import ListItem from 'components/Layout/components/ListItem';
import { getForms } from 'services/firestore';
import ConvertDate from 'helper/ConvertDate';

export default function FormList() {
  const forms = getForms();

  return (
    <>
      {
        forms && forms.map(({
          id, firstName, subject, planetOfBirth, status, createdDate,
        }) => (
          <ListItem
            key={id}
            applyBy={firstName}
            subject={subject}
            from={planetOfBirth}
            status={status}
            createdDate={ConvertDate(createdDate.seconds)}
          />
        ))
      }
    </>
  );
}
