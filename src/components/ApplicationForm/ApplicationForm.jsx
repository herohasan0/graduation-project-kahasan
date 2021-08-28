import React, { useState, useEffect } from 'react';

import { Flex, Box } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { applicationFormSchema } from 'helpers/YupSchema';

import { submitForm } from 'helpers/Submit';

import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
  MyButton,
} from 'components';

import { useFormContext } from 'contexts/formContext';

export function ApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { errors, handleSubmit, register, setSchema } = useFormContext();

  useEffect(() => {
    setSchema(applicationFormSchema);
  }, []);

  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    submitForm(data, history).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Box w="full" data-testid="application-form">
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
