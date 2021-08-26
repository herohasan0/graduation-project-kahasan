/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN } from 'navigation/CONSTANTS';
import { useAuth } from 'contexts/authContext';

function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();

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
