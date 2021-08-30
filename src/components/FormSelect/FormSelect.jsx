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
  inputTitle,
  label,
  register = () => {},
  required,
  errors,
  disabled,
  value,
  children,
  placeholder,
  helperText,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Select
          data-testid="form-select"
          {...register(label, { required })}
          borderColor="black"
          borderRadius="lg"
          mt="3"
          id={label}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          _focus={{
            borderColor: 'black',
            boxShadow: '0 0 0 1px black',
          }}
          _hover={{
            borderColor: 'black',
            boxShadow: '0 0 0 1px black',
          }}
        >
          {children}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>
          {errors[`${label}`] && errors[`${label}`].message}
        </FormErrorMessage>
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
  register: () => {},
  disabled: false,
  value: undefined,
  children: {},
};

FormSelect.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};
