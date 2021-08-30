/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { AlertContainer, SuccessForm } from 'components';

import {
  SUBMITTEDALERTTITLE,
  SUBMITTEDALERTDESCRIPTION,
  ALERTIDMESSAGE,
  WARNINGMESSAGE,
} from 'config/languages/en';

export function SuccessPage() {
  const { state } = useLocation();
  return (
    <>
      <AlertContainer
        STATUS="success"
        ALERTTITLE={SUBMITTEDALERTTITLE}
        ALERTDESCRIPTION={SUBMITTEDALERTDESCRIPTION}
        ALERTIDMESSAGE={ALERTIDMESSAGE}
        id={state.dataid}
        NOTICEMESSAGE={WARNINGMESSAGE}
      />

      <SuccessForm noAdminNote noApplicationStatus formValue={state.data} />
    </>
  );
}
