// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUBugdiMJm8717omuywS2ca7E8L3rmwnY",
  authDomain: "chat-ab8b3.firebaseapp.com",
  projectId: "chat-ab8b3",
  storageBucket: "chat-ab8b3.appspot.com",
  messagingSenderId: "617872159239",
  appId: "1:617872159239:web:481ea1f9012ddd3b6770a2",
  measurementId: "G-MXFK5P55D8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
//-get auth instance
const auth = getAuth();

/////////////////////
//////////////////////
//////////////////////
///////////////
// const db = getFirestore();
const db = getFirestore(app);
// const msgCollection = collection(db, `massages`);
// console.log(
//   msgCollection
//   //,db
// );

// (async () => {

//     const querySnapshot = await getDocs(collection(db, "massages"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`)})

// })();
//////////////////////
//////////////////////
//////////////////////
//////////////////////

export {
  app,
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getDocs,
  collection,
  db,
  query,
  orderBy,
  onSnapshot,
  
};
