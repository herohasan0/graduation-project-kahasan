import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { Flex, chakra } from '@chakra-ui/react';
import { FormInput, MyButton } from 'components';
import { checkStatusSubmit } from 'helpers/Submit';
import { useFormContext } from 'contexts/formContext';
import { NOAPPLICATONERROR } from 'config/languages/en';
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
      <chakra.form w="full" onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column">
          <FormInput
            label="formId"
            inputTitle="ID"
            register={register}
            errors={Error}
            required
          />

          <MyButton
            marginTop="24"
            isLoading={isLoading}
            text="Check"
            loadingText="Checking"
          />
        </Flex>
      </chakra.form>
    </>
  );
}
