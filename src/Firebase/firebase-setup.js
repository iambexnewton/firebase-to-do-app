import firebase from 'firebase';

import firebaseConfig from './firebase';

firebase.initializeApp(firebaseConfig);

const db = firebase();

export default db;
