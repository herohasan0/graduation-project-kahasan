/* eslint-disable react/prop-types */
import React from 'react';

import {
  Flex, Divider, Text, Image, Center, Menu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react';

import ConvertDate from 'helper/ConvertDate';

import { useHistory } from 'react-router-dom';
import StatusBar from './StatusBar';

export default function ListItem({ form }) {
  const history = useHistory();
  const {
    firstName, subject, planetOfBirth, status, createdDate, id,
  } = form;
  return (
    <Flex flexDir="column" pt="4" fontSize="sm">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image borderRadius="full" w="imageMdx" h="imageMdx" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
          <Text ml="1.5">{firstName}</Text>
        </Flex>
        <Text>{subject}</Text>
        <Text>{planetOfBirth}</Text>

        <StatusBar status={status} />

        <Text>{ConvertDate(createdDate.seconds)}</Text>

        <Menu>
          <MenuButton as={Center} cursor="pointer">
            <Image src="/assets/icons/action.png" w="imageMd" h="imageMd" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              history.push({
                pathname: `/admin/basvuru-listesi/${id}`,
                state: { result: form },
              });
            }}
            >
              Edit

            </MenuItem>
          </MenuList>
        </Menu>

      </Flex>
      <Divider mt="4" />
    </Flex>
  );
}
