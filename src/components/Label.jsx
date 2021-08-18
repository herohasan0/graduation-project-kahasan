import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function Label({ htmlFor, labelText, children }) {
  return (
    <label htmlFor={htmlFor}>
      <Box fontSize="lg" as="span">{labelText}</Box>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
