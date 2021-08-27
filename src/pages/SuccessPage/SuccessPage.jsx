import React from 'react';
import {  AlertContainer } from 'components';

import {
  ALERTTITLE, ALERTDESCRIPTION, ALERTIDMESSAGE, NOTICEMESSAGE,
} from 'CONSTANS';

import { useLocation } from 'react-router-dom';
import { SuccessForm } from 'components/SuccessForm/SuccessForm';

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

      <SuccessForm noAdminNote noApplicationStatus formValue={state.data} />
    </>
  );
}
