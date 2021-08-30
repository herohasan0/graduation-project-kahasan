import React from 'react';
import PropTypes from 'prop-types';
import { statusVariant } from 'helpers/StatusVariant';
import { Flex, Box, Badge, Text } from '@chakra-ui/react';

import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
  AlertContainer,
} from 'components';

export function SuccessForm({ formValue, noAdminNote, noApplicationStatus }) {
  return (
    <Box w="full" data-testid="success-form">
      {!noApplicationStatus && (
        <>
          Application status:
          <Badge colorScheme={statusVariant(formValue.status).colorScheme}>
            {formValue.status}
          </Badge>
        </>
      )}

      {!noAdminNote && (
        <>
          <Text>Admin Note:</Text>
          <AlertContainer
            STATUS={statusVariant(formValue.status).status}
            ALERTTITLE={statusVariant(formValue.status).title}
            ALERTDESCRIPTION={formValue.adminNoted}
          />
        </>
      )}

      <Flex flexDir="column">
        <FormInputContainer disabled value={formValue} />
        <FormSelectContainer disabled value={formValue} />
        <FormTextAreaContainer disabled value={formValue} />
      </Flex>
    </Box>
  );
}

SuccessForm.defaultProps = {
  formValue: {
    status: '',
    adminNoted: '',
  },
  noAdminNote: undefined,
  noApplicationStatus: undefined,
};

SuccessForm.propTypes = {
  formValue: PropTypes.shape({
    status: PropTypes.string,
    adminNoted: PropTypes.string,
  }),
  noAdminNote: PropTypes.bool,
  noApplicationStatus: PropTypes.bool,
};
