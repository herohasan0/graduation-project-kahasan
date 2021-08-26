import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export function Header({ title }) {
  return (
    <Flex justifyContent="space-between" alignItems="center" px="6">
      <Text fontSize="lg" fontWeight="bold">{title}</Text>
      <Flex alignItems="center">
        <Image data-testid="notification-icon-header" w="imageMd" mr="5" h="imageMd" src="/assets/icons/notifications.png" />
        <Image data-testid="profile-icon-header" w="imageLg" mr="5" h="imageLg" src="/assets/icons/profile.png" />
        <Text data-testid="text-header" fontSize="lg" fontWeight="bold">Kodluyoruz</Text>
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
