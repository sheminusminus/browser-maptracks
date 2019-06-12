import * as firebase from 'firebase/app';
import axios from 'axios';

import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyAJ_qmrcPFwCgqjk71QOIb0aM9_Ni6rbbc',
  authDomain: 'maptracks-66900.firebaseapp.com',
  databaseURL: 'https://maptracks-66900.firebaseio.com',
  projectId: 'maptracks-66900',
  storageBucket: 'maptracks-66900.appspot.com',
  messagingSenderId: '487378662121',
  appId: '1:487378662121:web:44f290bff0198755'
};

firebase.initializeApp(config);

const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)`;
const getUserDocUrl = (uid) => `${firestoreUrl}/users/${uid}`;

const getUserDoc = async (uid) => {
  const ref = firebase.firestore().collection('users').doc(uid);
  const doc = await ref.get();
  if (doc.exists) {
    return doc.data();
  }
  return undefined;
};

export const Firestore = {
  getUserDoc,
};

export default firebase;
