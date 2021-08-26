/* eslint-disable react/prop-types */
import React from 'react';
import { FORMTEXTAREAVALUES } from 'CONSTANS';
import { FormTextArea } from 'components';

export function FormTextAreaContainer({
  register, errors, required, disabled, value,
}) {
  return (
    <>
      {FORMTEXTAREAVALUES.map(({ label, inputTitle, helperText }) => (
        <FormTextArea
          key={label}
          label={label}
          inputTitle={inputTitle}
          helperText={helperText}
          register={register}
          errors={errors}
          required={required}
          disabled={disabled}
          value={value}
        />
      ))}
    </>
  );
}
