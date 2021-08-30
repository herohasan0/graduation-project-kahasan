import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

export function MyButton({ text, loadingText, isLoading, onClick, marginTop }) {
  return (
    <Button
      onClick={onClick}
      mt={marginTop}
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme="black"
      backgroundColor="black"
      color="white"
      type="submit"
      size="lg"
      fontSize="md"
      data-testid="mybutton"
    >
      {text}
    </Button>
  );
}

MyButton.defaultProps = {
  text: '',
  loadingText: '',
  isLoading: false,
  onClick: undefined,
  marginTop: '',
};

MyButton.propTypes = {
  text: PropTypes.string,
  loadingText: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
