/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function FormSelect({
  inputTitle, label, register, required, errors,
}) {
  return (
    <>
      <FormControl isInvalid={errors[`${label}`]}>
        <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
        <Select {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} placeholder="Select planet">
          <option>Magrathea</option>
          <option>Earth</option>
          <option>NowWhat</option>
          <option>Bethselamin</option>
          <option>Damogran</option>
          <option>Betelgeuse 5</option>
          <option>Viltvodle 6</option>
        </Select>
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
};

FormSelect.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.shape({}),
};
