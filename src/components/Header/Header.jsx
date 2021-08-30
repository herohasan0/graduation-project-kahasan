import React from 'react';
import PropTypes from 'prop-types';
import { Logout } from 'components/Logout/Logout';
import { Flex, Text, Image } from '@chakra-ui/react';

export function Header({ title }) {
  return (
    <Flex justifyContent="space-between" alignItems="center" px="6">
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Flex alignItems="center">
        <Logout black big />
        <Image
          data-testid="profile-icon-header"
          w="imageLg"
          mr="5"
          ml="10px"
          h="imageLg"
          src="/assets/icons/profile.png"
        />
        <Text data-testid="text-header" fontSize="lg" fontWeight="bold">
          Kodluyoruz
        </Text>
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
