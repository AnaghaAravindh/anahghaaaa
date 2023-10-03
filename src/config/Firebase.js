import {getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBKkZSSWcZEUPUJUJMcAlxDY0bWSKhm6M",
  authDomain: "react-project1-643be.firebaseapp.com",
  databaseURL: "https://react-project1-643be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-project1-643be",
  storageBucket: "react-project1-643be.appspot.com",
  messagingSenderId: "1002044103638",
  appId: "1:1002044103638:web:35875c991cc945103d6277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app); 