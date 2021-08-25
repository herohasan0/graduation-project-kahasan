/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import FormInput from 'pages/components/FormInput';

import { Flex, Button } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { getData } from 'services/firestore';

import { NOAPPLICATONERROR } from 'CONSTANS';

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

    getData(data.formId).then((result) => {
      if (result) {
        setIsLoading(false);
        history.push({
          pathname: `/basvuru/${data.formId}`,
          state: { result, dataid: data.formId },
        });
      } else {
        setError({
          formId: {
            message: NOAPPLICATONERROR,
          },
        });
      }
    }).catch((error) => {
      alert(error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column">
          <FormInput label="formId" inputTitle="ID" register={register} errors={Error} required />
          <Button
            mt={24}
            isLoading={isLoading}
            loadingText="Sending"
            variant="outline"
            colorScheme="teal"
            type="submit"
          >
            Check
          </Button>

        </Flex>
      </form>
    </>
  );
}
