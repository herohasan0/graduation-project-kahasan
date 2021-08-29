/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { AlertContainer, SuccessForm } from 'components';

import {
  ALERTTITLE,
  ALERTDESCRIPTION,
  ALERTIDMESSAGE,
  NOTICEMESSAGE,
} from 'CONSTANS';

export function SuccessPage() {
  const { state } = useLocation();
  console.log('state', state);
  return (
    <>
      <AlertContainer
        STATUS="success"
        ALERTTITLE={ALERTTITLE}
        ALERTDESCRIPTION={ALERTDESCRIPTION}
        ALERTIDMESSAGE={ALERTIDMESSAGE}
        id={state.dataid}
        NOTICEMESSAGE={NOTICEMESSAGE}
      />

      <SuccessForm noAdminNote noApplicationStatus formValue={state.data} />
    </>
  );
}
