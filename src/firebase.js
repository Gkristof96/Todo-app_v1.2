import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDIK0Wz_nm3XRI9rA9EYizOwzRJlW6493s",
  authDomain: "todo-app-8617e.firebaseapp.com",
  projectId: "todo-app-8617e",
  storageBucket: "todo-app-8617e.appspot.com",
  messagingSenderId: "302477720252",
  appId: "1:302477720252:web:c0c9accf27df13e418aeb9",
  measurementId: "G-2GKHMRBVSS",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
