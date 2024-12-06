// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCamcTsxFBA9nIFjqAXRdqHalN_VSl3p38",
  authDomain: "movie-portal-client-b951d.firebaseapp.com",
  projectId: "movie-portal-client-b951d",
  storageBucket: "movie-portal-client-b951d.firebasestorage.app",
  messagingSenderId: "582849049258",
  appId: "1:582849049258:web:ec2942833ead3b3e9116d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
