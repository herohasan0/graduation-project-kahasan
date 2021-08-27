/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import { Flex, Button, Box } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { addData } from 'services/firestore';
import { SUCCESS } from 'navigation/CONSTANTS';

import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
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

  const onSubmit = async (data) => {
    setIsLoading(true);

    addData(data)
      .then((docs) => {
        setIsLoading(false);
        history.push({
          pathname: SUCCESS,
          state: { data, dataid: docs },
        });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
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

          <Button
            mt={24}
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
