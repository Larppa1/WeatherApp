import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPwwmkz-batmOhz2l2gBnXUseH1LrfKI",
  authDomain: "weatherapp-93d50.firebaseapp.com",
  projectId: "weatherapp-93d50",
  storageBucket: "weatherapp-93d50.appspot.com",
  messagingSenderId: "719370945652",
  appId: "1:719370945652:web:fc0b541f543199522bfd21",
  measurementId: "G-6X0S8RKKJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);