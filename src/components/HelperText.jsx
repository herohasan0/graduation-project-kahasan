import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

export default function HelperText({ text, width }) {
  return (
    <Text color="black" fontFamily="Roboto" lineHeight="base" fontSize="md" w={width}>{text}</Text>
  );
}

HelperText.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};

HelperText.defaultProps = {
  width: '100%',
};
