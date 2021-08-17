/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Input } from '@chakra-ui/react';

export default function CustomInput({
  label, register, required, ...props
}) {
  return (
    <Box>
      <label htmlFor={label}>
        {label}
        <Input {...register(label, { required })} borderColor="#000" borderRadius={8} mt="3" id={label} {...props} />
      </label>
    </Box>
  );
}

CustomInput.defaultProps = {
  required: false,
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
