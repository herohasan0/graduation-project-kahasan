import React from 'react';
import { ApplicationForm, AlertContainer } from 'components';

import {
  ALERTTITLE, ALERTDESCRIPTION, ALERTIDMESSAGE, NOTICEMESSAGE,
} from 'CONSTANS';

import { useLocation } from 'react-router-dom';

export function SuccessPage() {
  const { state } = useLocation();
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

      <ApplicationForm formValue={state.data} disabled />
    </>
  );
}
