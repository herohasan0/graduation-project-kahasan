import React from 'react';
import PropTypes from 'prop-types';
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

CheckStatusResult.defaultProps = {
  noAdminNote: undefined,
};

CheckStatusResult.propTypes = {
  noAdminNote: PropTypes.bool,
};
