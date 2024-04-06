// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2I2KzpFEFDGiK-eSefXUlEys_-o0ov6A",
  authDomain: "dragon-news-firebase-be39e.firebaseapp.com",
  projectId: "dragon-news-firebase-be39e",
  storageBucket: "dragon-news-firebase-be39e.appspot.com",
  messagingSenderId: "755832489879",
  appId: "1:755832489879:web:c0aa8924d8e2e59dc926d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;