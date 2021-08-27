/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import { Flex, Box } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { submitForm } from 'helpers/Submit';

import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
  MyButton,
} from 'components';

import { schema } from 'helpers/YupSchema';

export function ApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    submitForm(data, history).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column">

          <FormInputContainer register={register} errors={errors} />
          <FormSelectContainer register={register} errors={errors} />
          <FormTextAreaContainer register={register} errors={errors} />

          <MyButton isLoading={isLoading} text="Send" loadingText="Sending" />

        </Flex>
      </form>
    </Box>
  );
}
