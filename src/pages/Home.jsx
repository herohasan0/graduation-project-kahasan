import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Flex flexDir="column">
        <Link to="/basvuru-olustur">Application Form</Link>
        <Link to="/basvuru-sorgula">Check Your Status</Link>
      </Flex>
    </>
  );
}
