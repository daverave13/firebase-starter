import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-0jrm8NBA562HwliTQnTuEGG6XtjiQdM",
  authDomain: "fir-starter-fb.firebaseapp.com",
  projectId: "fir-starter-fb",
  storageBucket: "fir-starter-fb.appspot.com",
  messagingSenderId: "1012490931193",
  appId: "1:1012490931193:web:76cd60507748674cd08b28",
  measurementId: "G-XXSWF4NJKR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Database
const database = firebase.database();
export default database;
