import React from 'react';
import './App.css';

// ROUTER
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';

export function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}
