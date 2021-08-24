/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import {
  Flex, Button, Box, Badge, Text, Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addData } from 'services/firestore';
import { SUCCESS } from 'navigation/CONSTANTS';
import { PLANETSELECTHELPERTEXT, REASONTOAPPLYHELPERTEXT } from 'CONSTANS';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';

const schema = yup.object().shape({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  yearOfBirth: yup.number().required(),
  idNumber: yup.number().required(),
  planetOfBirth: yup.string().required(),
  address: yup.string().max(250).required(),
  reasonOfApply: yup.string().max(350).required(),
});

export default function ApplicationForm({ formValue, disabled }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    setIsLoading(true);

    addData(data).then((docs) => {
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

  const statusVariant = {
    Approved: {
      colorScheme: 'green',
      status: 'success',
      title: 'Congratulations! :)',
    },
    Cancelled: {
      colorScheme: 'red',
      status: 'error',
      title: 'Soory :(',
    },
    Pending: {
      colorScheme: 'gray',
    },
  };

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        {formValue && formValue.status && (
          <>
            Application status:
            <Badge colorScheme={statusVariant[formValue.status].colorScheme}>
              {formValue.status}
            </Badge>
          </>
        )}

        {formValue && formValue.adminNoted && (
        <>
          <Text>Admin Note:</Text>
          <Alert
            status={statusVariant[formValue.status].status}
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            py="30px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {statusVariant[formValue.status].title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {formValue.adminNoted}
            </AlertDescription>
          </Alert>
        </>
        )}

        <Flex flexDir="column">
          <FormInput label="firstName" inputTitle="First Name" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.firstName} />
          <FormInput label="lastName" inputTitle="Last Name" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.lastName} />
          <FormInput label="yearOfBirth" inputTitle="Year of Birth" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.yearOfBirth} />
          <FormInput label="idNumber" inputTitle="ID Number" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.idNumber} />
          <FormSelect label="planetOfBirth" helperText={PLANETSELECTHELPERTEXT} inputTitle="Planet of Birth" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.planetOfBirth} placeholder="Select a planet">
            <option value="Magrathea">Magrathea</option>
            <option value="Earth">Earth</option>
            <option value="NowWhat">NowWhat</option>
            <option value="Bethselamin">Bethselamin</option>
            <option value="Damogran">Damogran</option>
            <option value="Betelgeuse 5">Betelgeuse 5</option>
            <option value="Viltvodle 6">Viltvodle 6</option>
          </FormSelect>
          <FormTextArea label="address" inputTitle="Address" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.address} />
          <FormTextArea label="reasonOfApply" helperText={REASONTOAPPLYHELPERTEXT} inputTitle="Reason of Apply" register={register} errors={errors} required disabled={disabled} value={formValue && formValue.reasonOfApply} />

          {!disabled
            && (
            <Button
              mt={24}
              isLoading={isLoading}
              loadingText="Sending"
              variant="outline"
              colorScheme="teal"
              type="submit"
            >
              Send
            </Button>
            )}

        </Flex>
      </form>
    </Box>

  );
}
