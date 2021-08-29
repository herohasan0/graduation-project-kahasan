/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Flex, Box } from '@chakra-ui/react';

import { useHistory, useLocation } from 'react-router-dom';

import { FormTextArea, FormSelect, MyButton } from 'components';
import { updateFormSubmit } from 'helpers/Submit';

import { adminResponseFormSchema } from 'helpers/YupSchema';

import { useFormContext } from 'contexts/formContext';

export function AdminResponseForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { errors, handleSubmit, register, setSchema } = useFormContext();

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setSchema(adminResponseFormSchema);
    }
    return () => {
      isActive = false;
    };
  }, []);

  const history = useHistory();
  const { state } = useLocation();

  const onSubmit = (data) => {
    setIsLoading(true);
    updateFormSubmit(state.formId, data, history).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Box w="full" mb="80px" data-testid="admin-response-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir="column">
          <FormTextArea
            label="response"
            inputTitle="Admin Note"
            register={register}
            placeholder="You can send notes to applicant. (optional)"
            value={state.result.adminNoted}
          />
          <FormSelect
            label="status"
            inputTitle="Status"
            register={register}
            errors={errors}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
          </FormSelect>

          <MyButton isLoading={isLoading} text="Send" loadingText="Sending" />
        </Flex>
      </form>
    </Box>
  );
}
