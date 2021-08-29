import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { StatusBar } from 'components';
import ConvertDate from 'helpers/ConvertDate';

import { Flex, Text, Image, Center, Tr, Td } from '@chakra-ui/react';

export function ListItem({ form }) {
  const history = useHistory();

  const { firstName, subject, planetOfBirth, status, createdDate, id, image } =
    form;

  return (
    <>
      <Tr>
        <Td>
          <Flex alignItems="center">
            <Image
              borderRadius="full"
              w="imageMdx"
              h="imageMdx"
              src={image || '/assets/icons/profile-sm.png'}
            />
            <Text ml="1.5">{firstName}</Text>
          </Flex>
        </Td>

        <Td w="275px">{subject}</Td>

        <Td w="166px">{planetOfBirth}</Td>

        <Td>
          <StatusBar status={status} />
        </Td>

        <Td isNumeric w="193px">
          {ConvertDate(createdDate.seconds)}
        </Td>

        <Td>
          <Center
            cursor="pointer"
            onClick={() => {
              history.push({
                pathname: `/admin/basvuru-listesi/${id}`,
                state: { result: form, formId: id },
              });
            }}
          >
            <Image src="/assets/icons/edit.png" w="imageMd" h="imageMd" />
          </Center>
        </Td>
      </Tr>
    </>
  );
}

ListItem.defaultProps = {
  form: {},
};

ListItem.propTypes = {
  form: PropTypes.shape({
    id: '',
    firstName: '',
    subject: '',
    planetOfBirth: '',
    status: '',
    image: '',
    createdDate: PropTypes.shape({
      seconds: PropTypes.number,
    }),
  }),
};
