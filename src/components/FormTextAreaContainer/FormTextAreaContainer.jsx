/* eslint-disable react/prop-types */
import React from 'react';
import { FORMTEXTAREAVALUES } from 'config/languages/en';
import { FormTextArea } from 'components';

export function FormTextAreaContainer({ register, errors, disabled, value }) {
  return (
    <>
      {FORMTEXTAREAVALUES.map(({ label, inputTitle, helperText, id }) => (
        <FormTextArea
          key={id}
          label={label}
          inputTitle={inputTitle}
          helperText={helperText}
          register={register}
          errors={errors}
          required
          disabled={disabled}
          value={value && value[label]}
        />
      ))}
    </>
  );
}
