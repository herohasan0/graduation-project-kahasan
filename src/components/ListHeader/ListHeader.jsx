import React from 'react';
import PropTypes from 'prop-types';

import { Thead, Tr, Th } from '@chakra-ui/react';
import { TABLEHEADER } from 'CONSTANS';

const TH = ({ title, isNumeric }) => (
  <Th fontFamily="Roboto" isNumeric={isNumeric}>
    {title}
  </Th>
);

export function ListHeader() {
  return (
    <Thead position="sticky" top="0" backgroundColor="white">
      <Tr>
        {TABLEHEADER.map(({ id, title, isNumeric }) => (
          <TH key={id} title={title} isNumeric={isNumeric}>
            Apply by
          </TH>
        ))}
      </Tr>
    </Thead>
  );
}

TH.propTypes = {
  title: PropTypes.string.isRequired,
  isNumeric: PropTypes.bool.isRequired,
};
