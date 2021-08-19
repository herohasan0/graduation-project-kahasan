/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import { Flex, Button } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Firestore from 'services/firestore';
import { SUCCESS } from 'navigation/CONSTANTS';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  year: yup.number().min(1920).max(2003).required(),
  address: yup.string().required(),
  planet: yup.string().required(),
});

export default function ApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    setIsLoading(true);

    Firestore(data).then((docs) => {
      console.log('docs', docs);
      setIsLoading(false);
      history.push({
        pathname: SUCCESS,
        state: { data, dataid: docs },
      });
    }).catch((error) => {
      alert(error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column">
        <FormInput label="firstName" inputTitle="First Name" register={register} errors={errors} required />
        <FormInput label="lastName" inputTitle="Last Name" register={register} errors={errors} required />
        <FormInput label="year" inputTitle="Year of Birth" register={register} errors={errors} required />
        <FormTextArea label="address" inputTitle="Address" register={register} errors={errors} required />
        <FormSelect label="planet" inputTitle="Planet of Birth" register={register} errors={errors} required />

        <Button
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

  );
}
