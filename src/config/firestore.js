// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  // GoogleAuthProvider,
  getAuth,
  // signInWithPopup,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
} from "firebase/auth";
import {
  getFirestore,
  // query,
  // getDocs,
  // collection,
  // where,
  // addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAMmY6TspJ4eTpXLHrZ90yvOtJ94_HOI-E",
//   authDomain: "session-manager-c7f30.firebaseapp.com",
//   projectId: "session-manager-c7f30",
//   storageBucket: "session-manager-c7f30.appspot.com",
//   messagingSenderId: "415364400030",
//   appId: "1:415364400030:web:132b52b4097b271c030c8f"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_APIKEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);