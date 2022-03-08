import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBT3eSHLn-fORDvPq05E0DZtXKUAvYE9tc",
    authDomain: "vuejs-bbe5d.firebaseapp.com",
    projectId: "vuejs-bbe5d",
    storageBucket: "vuejs-bbe5d.appspot.com",
    messagingSenderId: "406639778933",
    appId: "1:406639778933:web:31eadf12c89b0202fa2c3c",
    measurementId: "G-HC3TRNPZTS"
};
firebase.initializeApp(firebaseConfig);
const fireStoreCore= firebase.firestore();
export { fireStoreCore };