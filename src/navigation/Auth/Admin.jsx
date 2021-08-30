/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { FormInput, MyButton } from 'components';
import { adminFormSubmit } from 'helpers/Submit';
import { loginFormSchema } from 'helpers/YupSchema';
import { useFormContext } from 'contexts/formContext';
import { LOGINERRORMESSAGE } from 'config/languages/en';
import { Box, Center, Image, Heading, Stack } from '@chakra-ui/react';

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const { errors, handleSubmit, register, setSchema } = useFormContext();

  useEffect(() => {
    setSchema(loginFormSchema);
  }, []);

  const [Error, setError] = useState({});

  useEffect(() => {
    setError(errors);
  }, [errors]);

  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    adminFormSubmit(data.email, data.password, history)
      .catch(() => {
        setError({
          email: {
            message: LOGINERRORMESSAGE,
          },
        });
      })
      .finally(() => setIsLoading(false));
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
              helperText="Try: kodluyoruz@kodluyoruz.com"
            />
            <FormInput
              type="password"
              label="password"
              inputTitle="Password"
              register={register}
              errors={errors}
              required
              helperText="Try: bootcamp109"
            />

            <MyButton
              marginTop="24"
              isLoading={isLoading}
              text="Login"
              loadingText="Login"
            />
          </Stack>
        </form>
      </Card>
    </Box>
  );
}
