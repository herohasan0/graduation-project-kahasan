import * as yup from 'yup';

export const applicationFormSchema = yup.object().shape({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  yearOfBirth: yup.number().required(),
  idNumber: yup.number().required(),
  planetOfBirth: yup.string().required(),
  address: yup.string().max(250).required(),
  reasonOfApply: yup.string().max(350).required(),
});

export const adminResponseFormSchema = yup.object().shape({
  response: yup.string(),
  status: yup.string().required(),
});

export const loginFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const checkStatusFormSchema = yup.object().shape({
  formId: yup.string().required(),
});
