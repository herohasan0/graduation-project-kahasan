import { addData, updateForm, getUser, getData } from 'services/firestore';
import { SUCCESS, LIST } from 'navigation/CONSTANTS';

export const submitForm = async (data, history) => {
  await addData(data).then((docs) => {
    history.push({
      pathname: SUCCESS,
      state: { data, dataid: docs },
    });
  });
};

export const updateFormSubmit = async (formId, data, history) => {
  await updateForm(formId, data).then(() => {
    history.push({
      pathname: LIST,
    });
  });
};

export const adminFormSubmit = async (email, password, history) => {
  await getUser(email, password).then((user) => {
    if (user) {
      history.push({
        pathname: LIST,
        state: { userId: user.uid },
      });
    }
  });
};

export const checkStatusSubmit = async (id, history) => {
  await getData(id).then((result) => {
    if (result) {
      history.push({
        pathname: `/basvuru/${id}`,
        state: { result, dataid: id },
      });
    }
  });
};
