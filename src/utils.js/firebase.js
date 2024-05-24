// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD87Gsi8MyFaGKwv8jymCT0AuT1IQGHoBs",
  authDomain: "netflixgpt-c1216.firebaseapp.com",
  projectId: "netflixgpt-c1216",
  storageBucket: "netflixgpt-c1216.appspot.com",
  messagingSenderId: "803146659844",
  appId: "1:803146659844:web:11753eec1ade87efb19d51",
  measurementId: "G-KY31FPDN11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();