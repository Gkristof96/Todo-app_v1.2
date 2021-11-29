import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANlMzLats5pRPMk6d1-jOk1ce9pYObwr8",
  authDomain: "todo-app-204ba.firebaseapp.com",
  projectId: "todo-app-204ba",
  storageBucket: "todo-app-204ba.appspot.com",
  messagingSenderId: "850570114104",
  appId: "1:850570114104:web:8d3240d66ad9a57daca2cd",
};

initializeApp(firebaseConfig);

export const firestore = getFirestore();

export const auth = getAuth();
