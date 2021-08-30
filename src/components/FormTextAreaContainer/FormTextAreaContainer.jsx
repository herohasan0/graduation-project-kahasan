/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormTextArea } from 'components';
import { FORMTEXTAREAVALUES } from 'config/languages/en';

export function FormTextAreaContainer({ register, errors, disabled, value }) {
  console.log('value-----', value);
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

FormTextAreaContainer.defaultProps = {
  errors: {},
  register: () => {},
  value: undefined,
  disabled: false,
};

FormTextAreaContainer.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.shape({}),
  value: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
};
