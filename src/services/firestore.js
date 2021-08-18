import db from './firebase';

const formListRef = db.collection('form-list');

const firestore = async (data) => {
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

export default firestore;
