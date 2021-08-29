/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import { Box, Center, Image, Heading, Stack } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { FormInput, MyButton } from 'components';

import { adminFormSubmit } from 'helpers/Submit';

import { loginFormSchema } from 'helpers/YupSchema';

import { useFormContext } from 'contexts/formContext';

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);

  const { errors, handleSubmit, register, setSchema } = useFormContext();

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setSchema(loginFormSchema);
    }
    return () => {
      isActive = false;
    };
  }, []);

  const [Error, setError] = useState({});

  useEffect(() => {
    setError(errors);
  }, [errors]);

  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    adminFormSubmit(data.email, data.password, history).then((user) => {
      if (!user) {
        setError({
          email: {
            message:
              'The email and password you entered did not match our records. Please double-check and try again.',
          },
        });
      }
      setIsLoading(false);
    });
  };

  const Card = (props) => (
    <Box py="8" px="10" shadow="base" rounded="lg" {...props} />
  );

  return (
    <Box maxW="md" mx="auto" mt="50px">
      <Center onClick={() => history.push({ pathname: '/' })} cursor="pointer">
        <Image src="./assets/images/logo.png" w="3xs" />
      </Center>
      <Heading
        fontFamily="body"
        textAlign="center"
        size="xl"
        fontWeight="bold"
        mt="40px"
      >
        Sign in to your account
      </Heading>
      <Card mt="20px">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing="6">
            <FormInput
              type="text"
              label="email"
              inputTitle="Email"
              register={register}
              errors={Error}
              required
            />
            <FormInput
              type="password"
              label="password"
              inputTitle="Password"
              register={register}
              errors={errors}
              required
            />

            <MyButton isLoading={isLoading} text="Login" loadingText="Login" />
          </Stack>
        </form>
      </Card>
    </Box>
  );
}
