/* eslint-disable no-unused-vars */
import { useState } from 'react';
import db from './firebase';

firestore;

const formListRef = db.collection('form-list');

export const addData = async (data) => {
  let id;
  await formListRef
    .add({
      firstName: data.firstName,
      lastName: data.lastName,
      yearOfBirth: data.year,
      address: data.address,
      planetOfBirth: data.planet,
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};

// eslint-disable-next-line no-unused-vars
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
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  return formData;
};
