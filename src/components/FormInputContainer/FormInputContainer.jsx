/* eslint-disable react/prop-types */
import React from 'react';
import { FORMINPUTVALUES } from 'config/languages/en';
import { FormInput } from 'components';

export function FormInputContainer({ register, errors, disabled, value }) {
  return (
    <>
      {FORMINPUTVALUES.map(({ label, inputTitle, id }) => (
        <FormInput
          key={id}
          label={label}
          inputTitle={inputTitle}
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
