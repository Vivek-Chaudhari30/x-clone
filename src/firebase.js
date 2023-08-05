// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "./firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBzp0opGvidf60xrSQYsv8-gh11bZ-CDyw",
    authDomain: "twitter-clone-5da2f.firebaseapp.com",
    projectId: "twitter-clone-5da2f",
    storageBucket: "twitter-clone-5da2f.appspot.com",
    messagingSenderId: "889602889124",
    appId: "1:889602889124:web:20a8cfcfe4efc60079dd31",
    measurementId: "G-5E576ZQ392"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
