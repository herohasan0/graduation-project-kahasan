/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export function FormSelect({
  inputTitle, label, register, required, errors, disabled, value, children, placeholder, helperText,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Select {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} placeholder={placeholder} disabled={disabled} value={value}>
          {children}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>{errors[`${label}`] && errors[`${label}`].message}</FormErrorMessage>
      </FormControl>
    </>
  );
}

FormSelect.defaultProps = {
  required: false,
  label: '',
  inputTitle: '',
  errors: {},
  placeholder: '',
  helperText: '',
};

FormSelect.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};
