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
  apiKey: "AIzaSyCQ4MR1vCuqReQsG9ZcHtTSMaFhrg46Hy4",
  authDomain: "slot-manager-44650.firebaseapp.com",
  projectId: "slot-manager-44650",
  storageBucket: "slot-manager-44650.appspot.com",
  messagingSenderId: "996596453979",
  appId: "1:996596453979:web:3ecbb4b608664a76cfa57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);