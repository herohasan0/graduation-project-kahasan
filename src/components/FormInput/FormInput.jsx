/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export function FormInput({
  inputTitle, label, register, required, errors, disabled, value, helperText, ...props
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Input data-testid="form-input" {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} disabled={disabled} value={value} {...props} />
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>{errors[`${label}`] && errors[`${label}`].message}</FormErrorMessage>
      </FormControl>
    </>
  );
}

FormInput.defaultProps = {
  required: false,
  label: '',
  inputTitle: '',
  errors: {},
  helperText: '',
};

FormInput.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
  helperText: PropTypes.string,
};
