import React from 'react';
import ApplicationForm from 'pages/components/ApplicationForm';

import {
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';
import { ALERTTITLE, ALERTDESCRIPTION, ALERTIDMESSAGE } from 'CONSTANS';

export default function Home() {
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
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
        </AlertTitle>
      </Alert>

      <ApplicationForm />
    </>
  );
}
