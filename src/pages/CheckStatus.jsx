/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import FormInput from 'pages/components/FormInput';

import { Flex, Button } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import db from 'services/firebase';

import { getData } from 'services/firestore';

const schema = yup.object().shape({
  formId: yup.string().required(),
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const formListRef = db.collection('form-list');

  const onSubmit = (data) => {
    setIsLoading(true);

    getData(data.formId).then((result) => {
      if (result) {
        setIsLoading(false);
        history.push({
          pathname: '/hasan',
          state: { result, dataid: data.formId },
        });
      } else {
        console.log('olmazs');
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
          <FormInput label="formId" inputTitle="ID" register={register} errors={errors} required />
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
