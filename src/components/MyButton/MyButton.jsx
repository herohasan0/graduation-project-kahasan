/* eslint-disable react/prop-types */
import React from 'react';

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
