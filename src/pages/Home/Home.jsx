/* eslint-disable */
import React from 'react';
import { MyButton } from 'components';
import { Flex, Text } from '@chakra-ui/react';
import { useHistory, Link } from 'react-router-dom';
import { FORM, CHECK, ADMIN } from 'navigation/CONSTANTS';
import { HOMEPAGETITLE, HOMEPAGEDESCRIPTION } from 'config/languages/en';

export function Home() {
  const history = useHistory();

  return (
    <>
      <Flex flexDir="column">
        <Text>{HOMEPAGETITLE}</Text>
        <MyButton
          onClick={() => history.push({ pathname: FORM })}
          marginTop="24px"
          text="Application Form"
        />
        <MyButton
          onClick={() => history.push({ pathname: CHECK })}
          marginTop="24px"
          text="Check Your Status"
        />
        <Text mt="24px">{HOMEPAGEDESCRIPTION}</Text>
        <Link to="/admin">
          <Text color="blue" as="span">
            Admin Page
          </Text>
        </Link>
      </Flex>
    </>
  );
}
