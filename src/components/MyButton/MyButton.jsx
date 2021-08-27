/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '@chakra-ui/react';

export function MyButton({ text, loadingText, isLoading }) {
  return (
    <Button
      mt={24}
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme="black"
      backgroundColor="black"
      color="white"
      type="submit"
      size="lg"
      fontSize="md"
    >
      {text}
    </Button>
  );
}
