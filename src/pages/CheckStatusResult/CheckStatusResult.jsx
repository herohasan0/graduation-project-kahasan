/* eslint-disable react/prop-types */
import React from 'react';
import { SuccessForm } from 'components';

import { useLocation } from 'react-router-dom';

export function CheckStatusResult({ noAdminNote }) {
  const { state } = useLocation();

  return (
    <>
      <SuccessForm noAdminNote={noAdminNote} formValue={state.result} />
    </>
  );
}
