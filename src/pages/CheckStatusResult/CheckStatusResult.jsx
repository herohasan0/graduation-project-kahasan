import React from 'react';
import { SuccessForm } from 'components';

import { useLocation } from 'react-router-dom';

export function CheckStatusResult() {
  const { state } = useLocation();

  return (
    <>
      <SuccessForm formValue={state.result} />
    </>
  );
}
