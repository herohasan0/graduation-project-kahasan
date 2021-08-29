/* eslint-disable react/prop-types */
import React from 'react';
import {
  PLANETS,
  PLANETSELECTHELPERTEXT,
  PLANETSELECTTITLE,
  PLANETSELECTPLACEHOLDER,
} from 'config/languages/en';
import { FormSelect } from 'components';

export function FormSelectContainer({ register, errors, disabled, value }) {
  return (
    <>
      <FormSelect
        label="planetOfBirth"
        helperText={PLANETSELECTHELPERTEXT}
        inputTitle={PLANETSELECTTITLE}
        register={register}
        errors={errors}
        required
        disabled={disabled}
        value={value && value.planetOfBirth}
        placeholder={PLANETSELECTPLACEHOLDER}
      >
        {PLANETS.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </FormSelect>
    </>
  );
}
