import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from 'pages/FormPage';
import SuccessPage from 'pages/SuccessPage';
import {
  ROOT, FORM, SUCCESS, CHECK, CHECK_SPECIFIC, ADMIN,
} from 'navigation/CONSTANTS';
import NotFound from 'navigation/NotFound';
import Layout from 'components/Layout';
import Title from 'components/Title';
import HelperText from 'components/HelperText';
import {
  FORMTITLE, HELPERTEXT, COVERURL, CHECKTITLE, CHECKDESCRIPTION,
} from 'CONSTANS';
import Home from 'pages/Home';
import CheckStatus from 'pages/CheckStatus';
import CheckStatusResult from 'pages/CheckStatusResult';
import Admin from './Auth/Admin';

const RouterConfig = () => (
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

    <Route path={ADMIN}>
      <Admin />
    </Route>

    {/* List a generic 404-Not Found route here */}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default RouterConfig;
