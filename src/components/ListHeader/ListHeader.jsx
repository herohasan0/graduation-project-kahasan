import React from 'react';
import PropTypes from 'prop-types';
import { Thead, Tr, Th } from '@chakra-ui/react';

const TH = ({ title, isNumeric, display }) => (
  <Th display={display} fontFamily="Roboto" isNumeric={isNumeric}>
    {title}
  </Th>
);

export function ListHeader() {
  return (
    <Thead
      position="sticky"
      top="0"
      backgroundColor="white"
      data-testid="list-header"
    >
      <Tr data-testid="list-header-row">
        <TH title="Apply by" />
        <TH title="Subject" display={{ base: 'none', lg: 'table-cell' }} />
        <TH title="From" display={{ base: 'none', '2sm': 'table-cell' }} />
        <TH title="Status" display={{ base: 'none', sm: 'table-cell' }} />
        <TH
          title="Create Date"
          isNumeric
          display={{ base: 'none', md: 'table-cell' }}
        />
        <TH title="Action" />
      </Tr>
    </Thead>
  );
}

TH.defaultProps = {
  display: {},
  isNumeric: false,
};

TH.propTypes = {
  title: PropTypes.string.isRequired,
  isNumeric: PropTypes.bool,
  display: PropTypes.shape({}),
};
