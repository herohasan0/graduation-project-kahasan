/* eslint-disable no-undef */
import React from 'react';
import ApplicationForm from 'pages/components/ApplicationForm';

import { useLocation } from 'react-router-dom';

export default function Home() {
  const { state } = useLocation();

  console.log('state.result', state.result);

  return (
    <>
      <ApplicationForm formValue={state.result} disabled />
    </>
  );
}
