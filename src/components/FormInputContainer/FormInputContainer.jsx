/* eslint-disable react/prop-types */
import React from 'react';
import { FORMINPUTVALUES } from 'CONSTANS';
import { FormInput } from 'components';

export function FormInputContainer({
  register, errors, required, disabled, value,
}) {
  return (
    <>
      {FORMINPUTVALUES.map(({ label, inputTitle }) => (
        <FormInput
          key={label}
          label={label}
          inputTitle={inputTitle}
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
