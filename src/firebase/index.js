import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz_i3CdA30mpUWrnubWydwpHYnehEUsIo",
  authDomain: "summative-9bd46.firebaseapp.com",
  projectId: "summative-9bd46",
  storageBucket: "summative-9bd46.appspot.com",
  messagingSenderId: "205295980054",
  appId: "1:205295980054:web:f72682e9e9957f93452f37"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

export { auth,  firestore }