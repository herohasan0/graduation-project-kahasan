/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function FormTextArea({
  inputTitle, label, register, required, errors, disabled, value, placeholder, helperText,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Textarea {...register(label, { required })} placeholder={placeholder} borderColor="black" borderRadius="lg" mt="3" id={label} disabled={disabled} value={value} />
        <FormHelperText>{helperText}</FormHelperText>
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
  placeholder: '',
  helperText: '',
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};
