import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { ROOT } from 'navigation/CONSTANTS';
import NotFound from 'navigation/NotFound';

const RouterConfig = () => (
  <Switch>
    {/* List all public routes here */}
    <Route exact path={ROOT} component={Home} />

    {/* List a generic 404-Not Found route here */}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default RouterConfig;
