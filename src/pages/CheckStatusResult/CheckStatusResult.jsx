/* eslint-disable no-undef */
import React from 'react';
import { ApplicationForm } from 'components';

import { useLocation } from 'react-router-dom';

export function CheckStatusResult() {
  const { state } = useLocation();

  return (
    <>
      <ApplicationForm formValue={state.result} disabled />
    </>
  );
}
