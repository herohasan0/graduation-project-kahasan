/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import {
  Flex, Button, Box, Badge, Text,
} from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { addData } from 'services/firestore';
import { SUCCESS } from 'navigation/CONSTANTS';
import {
  PLANETSELECTHELPERTEXT, FORMINPUTVALUES, PLANETS, FORMTEXTAREAVALUES,
} from 'CONSTANS';
import {
  FormTextAreaContainer,
  FormSelectContainer,
  FormInputContainer,
  AlertContainer,
} from 'components';

import { schema } from 'helpers/YupSchema';

import { statusVariant } from 'helpers/StatusVariant';

export function ApplicationForm({ formValue, disabled }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    setIsLoading(true);

    addData(data)
      .then((docs) => {
        setIsLoading(false);
        history.push({
          pathname: SUCCESS,
          state: { data, dataid: docs },
        });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        {formValue && formValue.status && (
          <>
            Application status:
            <Badge colorScheme={statusVariant(formValue.status).colorScheme}>
              {formValue.status}
            </Badge>
          </>
        )}

        {formValue && formValue.adminNoted && (
          <>
            <Text>Admin Note:</Text>
            <AlertContainer
              STATUS={statusVariant(formValue.status).status}
              ALERTTITLE={statusVariant(formValue.status).title}
              ALERTDESCRIPTION={formValue.adminNoted}
            />
          </>
        )}

        <Flex flexDir="column">

          <FormInputContainer
            register={register}
            errors={errors}
            required
            disabled={disabled}
            value={formValue && formValue.firstName}
          />

          <FormSelectContainer
            register={register}
            errors={errors}
            required
            disabled={disabled}
            value={formValue && formValue.planetOfBirth}
          />

          <FormTextAreaContainer
            register={register}
            errors={errors}
            required
            disabled={disabled}
            value={formValue && formValue.reasonOfApply}
          />

          {!disabled && (
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
