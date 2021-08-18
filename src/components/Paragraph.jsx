import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

export default function Paragraph({ text, width }) {
  return (
    <Text color="black" fontFamily="Roboto" lineHeight="base" fontSize="md" w={width}>{text}</Text>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Paragraph.defaultProps = {
  width: '100%',
};
