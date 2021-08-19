import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from 'pages/FormPage';
import SuccessPage from 'pages/SuccessPage';
import { ROOT, FORM, SUCCESS } from 'navigation/CONSTANTS';
import NotFound from 'navigation/NotFound';
import Layout from 'components/Layout';
import Title from 'components/Title';
import HelperText from 'components/HelperText';
import { FORMTITLE, HELPERTEXT, COVERURL } from 'CONSTANS';
import Home from 'pages/Home';

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

    {/* List a generic 404-Not Found route here */}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default RouterConfig;
