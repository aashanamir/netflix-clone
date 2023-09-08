import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDovM1zXlyGtdWIDCXmhgnxa99pu54RqnA",
  authDomain: "netflix-clone-9d8b3.firebaseapp.com",
  projectId: "netflix-clone-9d8b3",
  storageBucket: "netflix-clone-9d8b3.appspot.com",
  messagingSenderId: "39352505808",
  appId: "1:39352505808:web:baa4a84a0dd9b4fa9ad5d5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth , app};