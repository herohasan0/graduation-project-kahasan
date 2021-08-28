import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'services/firebase';

import {
  Flex, Image, Text,
} from '@chakra-ui/react';

import { sidebarMinWidth } from 'CONSTANS';

export function Logout({ width, black, big }) {
  const signout = () => firebase.auth().signOut();

  let src = '/assets/icons/signout.png';
  let boxSize = '21px';

  if (black) { src = '/assets/icons/signout-black.png'; }

  if (big) { boxSize = '24px'; }

  return (
    <Flex
      alignItems="center"
      h="48px"
      py={3}
      pl="31px"
      onClick={signout}
      cursor="pointer"
      data-testid="logout"
    >
      <Image boxSize={boxSize} src={src} />

      {width > sidebarMinWidth && (
      <Text transition="0.5s" ml="5px">Logout</Text>
      )}

    </Flex>
  );
}

Logout.defaultProps = {
  width: 0,
  black: false,
  big: false,
};

Logout.propTypes = {
  width: PropTypes.number,
  black: PropTypes.bool,
  big: PropTypes.bool,
};
