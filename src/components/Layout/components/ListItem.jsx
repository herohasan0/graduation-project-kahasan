import React from 'react';

import {
  Flex, Divider, Text, Image, Center,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import StatusBar from './StatusBar';

export default function ListItem({
  avatarSrc, applyBy, subject, from, status, createdDate,
}) {
  return (
    <Flex flexDir="column" pt="4" fontSize="sm">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image borderRadius="full" w="imageMdx" h="imageMdx" src={avatarSrc} />
          <Text ml="1.5">{applyBy}</Text>
        </Flex>
        <Text>{subject}</Text>
        <Text>{from}</Text>

        <StatusBar status={status} />

        <Text>{createdDate}</Text>
        <Center><Image src="/assets/icons/action.png" w="imageMd" h="imageMd" /></Center>
      </Flex>
      <Divider mt="4" />
    </Flex>
  );
}

ListItem.defaultProps = {
  avatarSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
};

ListItem.propTypes = {
  avatarSrc: PropTypes.string,
  applyBy: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
};
