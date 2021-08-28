import React from 'react';
import PropTypes from 'prop-types';

import {
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';

export function AlertContainer({
  STATUS, ALERTTITLE, ALERTDESCRIPTION, ALERTIDMESSAGE, id, NOTICEMESSAGE,
}) {
  return (
    <>
      <Alert
        status={STATUS}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        py="30px"
        data-testid="alert-container"
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
          {id}
        </AlertTitle>
        <AlertDescription maxWidth="sm" mt={2.5}>
          {NOTICEMESSAGE}
        </AlertDescription>
      </Alert>
    </>

  );
}

AlertContainer.defaultProps = {
  ALERTIDMESSAGE: '',
  id: '',
  NOTICEMESSAGE: '',
};

AlertContainer.propTypes = {
  STATUS: PropTypes.string.isRequired,
  ALERTTITLE: PropTypes.string.isRequired,
  ALERTDESCRIPTION: PropTypes.string.isRequired,
  ALERTIDMESSAGE: PropTypes.string,
  id: PropTypes.string,
  NOTICEMESSAGE: PropTypes.string,
};
