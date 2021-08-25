/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import FormPage from 'pages/FormPage';
import SuccessPage from 'pages/SuccessPage';
import {
  Divider, Flex, Box, Button,
} from '@chakra-ui/react';
import {
  ROOT, FORM, SUCCESS, CHECK, CHECK_SPECIFIC, ADMIN, LIST,
} from 'navigation/CONSTANTS';
import NotFound from 'navigation/NotFound';
import {
  Layout,
  Title, HelperText, ListHeader, AdminLayout,
} from 'components';

import {
  FORMTITLE, HELPERTEXT, COVERURL, CHECKTITLE, CHECKDESCRIPTION,
} from 'CONSTANS';
import Home from 'pages/Home';
import { CheckStatus, CheckStatusResult } from 'pages';

import FormList from 'pages/FormList';

import FormTextArea from 'pages/components/FormTextArea';
import AdminResponseForm from 'pages/components/AdminResponseForm';
import Admin from './Auth/Admin';
import PrivateRoute from './Auth/PrivateRoute';

const RouterConfig = () => {
  const history = useHistory();

  return (
    <Switch>
      {/* List all public routes here */}
      <Route exact path={ROOT}>
        <Layout
          imgUrl={COVERURL}
        >
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
        <Layout
          imgUrl={COVERURL}
          title={<Title title={CHECKTITLE} />}
        >
          <CheckStatusResult />
        </Layout>
      </Route>

      <Route exact path={ADMIN}>
        <Admin />
      </Route>

      <PrivateRoute exact path={LIST}>
        <AdminLayout>
          <ListHeader />
          <Divider mt="2.5" />
          <FormList />
        </AdminLayout>
      </PrivateRoute>

      <PrivateRoute exact path="/admin/basvuru-listesi/:id">
        <AdminLayout>
          <Flex cursor="pointer" w="48px" h="48px" onClick={() => history.push('/admin/basvuru-listesi')}>&lt;</Flex>
          <Divider mt="2.5" mb="2.5" />
          <Box overflowY="scroll" h="395px">
            <CheckStatusResult />
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
