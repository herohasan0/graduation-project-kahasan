/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import {
  Button, Box, Center, Image, Heading, Stack,
} from '@chakra-ui/react';

import { Link, useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import FormInput from 'pages/components/FormInput';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getUser } from 'services/firestore';

import { LIST } from 'navigation/CONSTANTS';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);

  const [Error, setError] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setError(errors);
  }, [errors]);

  const history = useHistory();

  const onSubmit = async (data) => {
    setIsLoading(true);

    getUser(data.email, data.password).then((user) => {
      if (user) {
        setIsLoading(false);
        history.push({
          pathname: { LIST },
          state: { userId: user.uid },
        });
      } else {
        setError({
          email: {
            message: 'The password is invalid or the user does not have a password.',
          },
        });
      }
    }).catch((error) => {
      alert(error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const Card = (props) => (
    <Box
      py="8"
      px={{
        base: '4',
        md: '10',
      }}
      shadow="base"
      rounded={{
        sm: 'lg',
      }}
      {...props}
    />
  );

  return (
    <Box maxW="md" mx="auto" mt="50px">
      <Center>
        <Link to="/">
          <Image src="./assets/images/logo.png" w="3xs" />
        </Link>
      </Center>
      <Heading fontFamily="body" textAlign="center" size="xl" fontWeight="bold" mt="40px">
        Sign in to your account
      </Heading>
      <Card mt="20px">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack spacing="6">
            <FormInput
              _focus={{
                borderColor: 'black',
                boxShadow: '0 0 0 1px black',
              }}
              _hover={{
                borderColor: 'black',
                boxShadow: '0 0 0 1px black',
              }}
              type="text"
              label="email"
              inputTitle="Email"
              register={register}
              errors={Error}
              required
            />
            <FormInput
              _focus={{
                borderColor: 'black',
                boxShadow: '0 0 0 1px black',
              }}
              _hover={{
                borderColor: 'black',
                boxShadow: '0 0 0 1px black',
              }}
              type="password"
              label="password"
              inputTitle="Password"
              register={register}
              errors={errors}
              required
            />

            <Button
              mt={24}
              isLoading={isLoading}
              loadingText="Login"
              colorScheme="black"
              backgroundColor="black"
              color="white"
              type="submit"
              size="lg"
              fontSize="md"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Card>
    </Box>
  );
}
