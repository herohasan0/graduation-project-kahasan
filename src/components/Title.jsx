import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export default function Title({ title }) {
  return (
    <Heading fontFamily="body" fontWeight="bold" as="h3" fontSize="2xl">{title}</Heading>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
