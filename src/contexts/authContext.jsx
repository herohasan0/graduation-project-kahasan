/* eslint-disable react/prop-types */
import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'services/firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(firebase.auth());

  const value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
