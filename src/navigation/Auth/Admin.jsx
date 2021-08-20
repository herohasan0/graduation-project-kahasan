/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  Button, Box, Center, Image, Heading, Stack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import FormInput from 'pages/components/FormInput';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log('data', data);
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
              errors={errors}
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
