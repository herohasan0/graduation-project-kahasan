/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Input, FormLabel } from '@chakra-ui/react';

export default function CustomInput({
  inputTitle, label, register, required,
}) {
  return (
    <>
      <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
      <Input {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} />
    </>
  );
}

CustomInput.defaultProps = {
  required: false,
  label: '',
  inputTitle: '',
};

CustomInput.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
