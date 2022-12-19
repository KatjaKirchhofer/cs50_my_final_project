// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADYTo0WRJ7eTQhMUU2w27YVuZ9UpLE-9E",
  authDomain: "success-2f951.firebaseapp.com",
  databaseURL: "https://success-2f951-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "success-2f951",
  storageBucket: "success-2f951.appspot.com",
  messagingSenderId: "64916877476",
  appId: "1:64916877476:web:8f772275cad09ab0efb631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);