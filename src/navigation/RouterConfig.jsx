import React from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import {
  FormPage,
  CheckStatus,
  CheckStatusResult,
  FormList,
  SuccessPage,
  Home,
} from 'pages';

import { Divider, Flex, Box, Table, Text } from '@chakra-ui/react';

import {
  ROOT,
  FORM,
  SUCCESS,
  CHECK,
  CHECK_SPECIFIC,
  ADMIN,
  LIST,
} from 'navigation/CONSTANTS';

import NotFound from 'navigation/NotFound';

import {
  Layout,
  Title,
  HelperText,
  ListHeader,
  AdminLayout,
  AdminResponseForm,
} from 'components';

import {
  FORMTITLE,
  HELPERTEXT,
  COVERURL,
  CHECKTITLE,
  CHECKDESCRIPTION,
} from 'CONSTANS';

import Admin from './Auth/Admin';
import PrivateRoute from './Auth/PrivateRoute';

const RouterConfig = () => {
  const history = useHistory();

  return (
    <Switch>
      {/* List all public routes here */}
      <Route exact path={ROOT}>
        <Layout imgUrl={COVERURL}>
          <Home />
        </Layout>
      </Route>

      <Route exact path={FORM}>
        <Layout
          helperText={<HelperText text={HELPERTEXT} />}
          title={<Title title={FORMTITLE} />}
          imgUrl={COVERURL}
        >
          <FormPage />
        </Layout>
      </Route>

      <Route exact path={SUCCESS}>
        <Layout imgUrl={COVERURL}>
          <SuccessPage />
        </Layout>
      </Route>

      <Route exact path={CHECK}>
        <Layout
          imgUrl={COVERURL}
          title={<Title title={CHECKTITLE} />}
          helperText={<HelperText text={CHECKDESCRIPTION} />}
        >
          <CheckStatus />
        </Layout>
      </Route>

      <Route exact path={CHECK_SPECIFIC}>
        <Layout imgUrl={COVERURL} title={<Title title={CHECKTITLE} />}>
          <CheckStatusResult />
        </Layout>
      </Route>

      <Route exact path={ADMIN}>
        <Admin />
      </Route>
      {/* h="27rem" */}
      <PrivateRoute exact path={LIST}>
        <AdminLayout>
          <Box
            h={{ base: 'calc(100vh - 18rem)', '2lg': 'calc(100vh - 22rem)' }}
            overflow="auto"
            fontFamily="roboto"
          >
            <Table>
              <ListHeader />
              <FormList />
            </Table>
          </Box>
        </AdminLayout>
      </PrivateRoute>

      <PrivateRoute exact path="/admin/basvuru-listesi/:id">
        <AdminLayout>
          <Flex
            cursor="pointer"
            w="48px"
            h="48px"
            onClick={() => history.push('/admin/basvuru-listesi')}
          >
            &lt;
            <Text as="span" _hover={{ textDecoration: 'underline' }}>
              Back
            </Text>
          </Flex>
          <Divider mt="2.5" mb="2.5" />
          <Box
            overflowY="scroll"
            h={{
              base: 'calc(100vh - 21.5rem)',
              '2lg': 'calc(100vh - 26.5rem)',
            }}
          >
            <CheckStatusResult noAdminNote />
            <Divider mt="25px" mb="2.5" />
            <AdminResponseForm />
          </Box>
        </AdminLayout>
      </PrivateRoute>

      {/* List a generic 404-Not Found route here */}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
