import React from 'react';

import PropTypes from 'prop-types';

import CustomInput from 'components/CustomInput';

export default function FormItem({
  label, inputTitle, register, required, errors,
}) {
  return (
    <>
      <CustomInput label={label} inputTitle={inputTitle} register={register} required={required} />
      <p>{errors[`${label}`] && errors[`${label}`].message}</p>
    </>
  );
}

FormItem.defaultProps = {
  required: false,
  errors: {},
};

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  required: PropTypes.bool,
};
