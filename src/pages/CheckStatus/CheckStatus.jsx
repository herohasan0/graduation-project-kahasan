/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { FormInput, MyButton } from 'components';

import { Flex } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { NOAPPLICATONERROR } from 'CONSTANS';

import { checkStatusSubmit } from 'helpers/Submit';

import { useFormContext } from 'contexts/formContext';

import { checkStatusFormSchema } from 'helpers/YupSchema';

export function CheckStatus() {
  const [isLoading, setIsLoading] = useState(false);

  const { errors, handleSubmit, register, setSchema } = useFormContext();

  useEffect(() => {
    setSchema(checkStatusFormSchema);
  }, []);

  const [Error, setError] = useState({});

  useEffect(() => {
    setError(errors);
  }, [errors]);

  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    checkStatusSubmit(data.formId, history).then((result) => {
      if (!result) {
        setError({
          formId: {
            message: NOAPPLICATONERROR,
          },
        });
      }
      setIsLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column">
          <FormInput label="formId" inputTitle="ID" register={register} errors={Error} required />

          <MyButton isLoading={isLoading} text="Check" loadingText="Checking" />

        </Flex>
      </form>
    </>
  );
}
