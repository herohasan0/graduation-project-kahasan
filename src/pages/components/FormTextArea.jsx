/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function FormTextArea({
  inputTitle, label, register, required, errors,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Textarea {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} />
        <FormErrorMessage>{errors[`${label}`] && errors[`${label}`].message}</FormErrorMessage>
      </FormControl>
    </>
  );
}

FormTextArea.defaultProps = {
  required: false,
  label: '',
  inputTitle: '',
  errors: {},
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
};
