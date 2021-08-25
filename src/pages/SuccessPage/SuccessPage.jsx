import React from 'react';
import { ApplicationForm } from 'components';

import {
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';
import {
  ALERTTITLE, ALERTDESCRIPTION, ALERTIDMESSAGE, NOTICEMESSAGE,
} from 'CONSTANS';

import { useLocation } from 'react-router-dom';

export function SuccessPage() {
  const { state } = useLocation();
  console.log('location', state);
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="300px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {ALERTTITLE}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {ALERTDESCRIPTION}
        </AlertDescription>
        <AlertTitle maxWidth="sm" mt={2.5} fontWeight="bold">
          {ALERTIDMESSAGE}
          {state.dataid}
        </AlertTitle>
        <AlertDescription maxWidth="sm" mt={2.5}>
          {NOTICEMESSAGE}
        </AlertDescription>
      </Alert>

      <ApplicationForm formValue={state.data} disabled />
    </>
  );
}
