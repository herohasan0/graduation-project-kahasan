/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Textarea, FormLabel,
} from '@chakra-ui/react';

export default function TextArea({
  inputTitle, label, register, required,
}) {
  return (
    <>
      <FormLabel htmlFor={label}>{inputTitle}</FormLabel>
      <Textarea {...register(label, { required })} borderColor="black" borderRadius="lg" mt="3" id={label} />
    </>
  );
}

TextArea.defaultProps = {
  required: false,
  label: '',
  inputTitle: '',
};

TextArea.propTypes = {
  label: PropTypes.string,
  inputTitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
