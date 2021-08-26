/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from 'services/firebase';
import { ADMIN } from 'navigation/CONSTANTS';

import { useAuthState } from 'react-firebase-hooks/auth';

function PrivateRoute({ children, ...rest }) {
  const [user] = useAuthState(firebase.auth());

  if (!user) return (<Redirect to={ADMIN} />);

  return (
    <Route
      {...rest}
      render={() => ((
        <>
          {children}
        </>
      ))}
    />

  );
}
export default PrivateRoute;
