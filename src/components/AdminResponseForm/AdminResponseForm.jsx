/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import {
  Flex, Box,
} from '@chakra-ui/react';

import { useHistory, useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormTextArea, FormSelect, MyButton } from 'components';
import { updateFormSubmit } from 'helpers/Submit';

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

  const onSubmit = (data) => {
    setIsLoading(true);
    updateFormSubmit(state.formId, data, history).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Box w="full" mb="80px" data-testid="admin-response-form">
      <form onSubmit={handleSubmit(onSubmit)}>

        <Flex flexDir="column">
          <FormTextArea label="response" inputTitle="Response" register={register} placeholder="You can send notes to applicant. (optional)" />
          <FormSelect label="status" inputTitle="Status" register={register} errors={errors} required>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
          </FormSelect>

          <MyButton isLoading={isLoading} text="Send" loadingText="Sending" />

        </Flex>
      </form>
    </Box>

  );
}
