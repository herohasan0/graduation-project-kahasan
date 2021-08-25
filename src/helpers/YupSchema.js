import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  yearOfBirth: yup.number().required(),
  idNumber: yup.number().required(),
  planetOfBirth: yup.string().required(),
  address: yup.string().max(250).required(),
  reasonOfApply: yup.string().max(350).required(),
});
