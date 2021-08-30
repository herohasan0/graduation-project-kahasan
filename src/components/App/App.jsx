import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { AuthProvider } from 'contexts/authContext';
import { FormProvider } from 'contexts/formContext';

export function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </FormProvider>
    </AuthProvider>
  );
}
