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

export function FormTextArea({
  inputTitle,
  label,
  register = () => {},
  required,
  errors,
  disabled,
  value,
  placeholder,
  helperText,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]} mt={7}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Textarea
          data-testid="form-textarea"
          {...register(label, { required })}
          placeholder={placeholder}
          borderColor="black"
          borderRadius="lg"
          mt="3"
          id={label}
          disabled={disabled}
          value={value}
          maxH="150px"
          _focus={{
            borderColor: 'black',
            boxShadow: '0 0 0 1px black',
          }}
          _hover={{
            borderColor: 'black',
            boxShadow: '0 0 0 1px black',
          }}
        />
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>
          {errors[`${label}`] && errors[`${label}`].message}
        </FormErrorMessage>
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
  register: () => {},
  value: undefined,
  disabled: false,
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};
