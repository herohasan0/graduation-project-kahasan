import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from './firebase';

const db = firebase.firestore();
const formListRef = db.collection('form-list');

export const addData = async (data) => {
  let id;
  await formListRef
    .add({
      firstName: data.firstName,
      lastName: data.lastName,
      yearOfBirth: data.yearOfBirth,
      idNumber: data.idNumber,
      planetOfBirth: data.planetOfBirth,
      address: data.address,
      reasonOfApply: data.reasonOfApply,
      status: 'Pending',
      subject: 'Citizenship Application',
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};

export const getData = async (formId) => {
  let formData;
  await formListRef
    .doc(formId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        formData = doc.data();
      } else {
        formData = '';
      }
    });
  return formData;
};

export const getUser = async (email, password) => {
  let userInfo;

  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      userInfo = user;
    });

  return userInfo;
};

export const getForms = () => {
  const [forms] = useCollectionData(formListRef, { idField: 'id' });
  return forms;
};

export const updateForm = async (formId, data) => {
  await formListRef.doc(formId).update({
    status: data.status,
    adminNoted: data.response,
  });
};

export const getTotalApplicationCount = () => {
  const [forms] = useCollectionData(formListRef);
  return forms && forms.length;
};

export const getApplicationCount = (status) => {
  const [forms] = useCollectionData(formListRef);
  const applicationCount =
    forms && forms.filter((form) => form.status === status);
  return applicationCount && applicationCount.length;
};
