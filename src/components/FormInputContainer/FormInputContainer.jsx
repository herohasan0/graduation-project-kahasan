import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'components';
import { FORMINPUTVALUES } from 'config/languages/en';

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

FormInputContainer.defaultProps = {
  errors: {},
  register: () => {},
  value: undefined,
  disabled: false,
};

FormInputContainer.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.shape({}),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.any]),
};
