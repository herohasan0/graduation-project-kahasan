/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '@chakra-ui/react';
import Label from './Label';

export default function CustomInput({
  inputTitle, label, register, required, ...props
}) {
  return (
    <Label htmlFor={label} labelText={inputTitle}>
      <Input {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} {...props} />
    </Label>
  );
}

CustomInput.defaultProps = {
  required: false,
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
