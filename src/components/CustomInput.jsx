/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Input } from '@chakra-ui/react';

export default function CustomInput({ field, form, ...props }) {
  const { name } = field;
  return (
    <Box>
      <label htmlFor={name}>
        {name}
        <Input borderColor="#000" borderRadius={8} mt="3" id={name} {...field} {...props} />
      </label>
    </Box>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  form: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
