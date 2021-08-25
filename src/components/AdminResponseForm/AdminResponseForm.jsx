/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import {
  Flex, Button, Box,
} from '@chakra-ui/react';

import { useHistory, useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateForm } from 'services/firestore';
import { LIST } from 'navigation/CONSTANTS';
import { FormTextArea, FormSelect } from 'components';

const schema = yup.object().shape({
  response: yup.string(),
  status: yup.string().required(),
});

export function AdminResponseForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const { state } = useLocation();

  const onSubmit = async (data) => {
    setIsLoading(true);

    updateForm(state.formId, data).then(() => {
      setIsLoading(false);
      history.push({
        pathname: LIST,
      });
    }).catch((error) => {
      alert(error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>

        <Flex flexDir="column">
          <FormTextArea label="response" inputTitle="Response" register={register} placeholder="You can send notes to applicant. (optional)" />
          <FormSelect label="status" inputTitle="Status" register={register} errors={errors} required>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
          </FormSelect>

          <Button
            mt={24}
            mb={24}
            isLoading={isLoading}
            loadingText="Sending"
            variant="outline"
            colorScheme="teal"
            type="submit"
          >
            Send
          </Button>

        </Flex>
      </form>
    </Box>

  );
}
