/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { FormInput, MyButton } from 'components';

import { Flex } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { getData } from 'services/firestore';

import { NOAPPLICATONERROR } from 'CONSTANS';

import { checkStatusSubmit } from 'helpers/Submit';

const schema = yup.object().shape({
  formId: yup.string().required(),
});

export function CheckStatus() {
  const [isLoading, setIsLoading] = useState(false);

  const [Error, setError] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

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
