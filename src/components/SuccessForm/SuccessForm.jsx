/* eslint-disable react/prop-types */
import React from 'react';

import {
  Flex, Box, Badge, Text,
} from '@chakra-ui/react';

import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
  AlertContainer,
} from 'components';

import { statusVariant } from 'helpers/StatusVariant';

export function SuccessForm({ formValue, noAdminNote, noApplicationStatus }) {
  return (
    <Box w="full">

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
