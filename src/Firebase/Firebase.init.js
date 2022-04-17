// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMxe5cygtFOkL-UdBsgylyHExOdCJM-Dg",
  authDomain: "mna-munna-photographer.firebaseapp.com",
  projectId: "mna-munna-photographer",
  storageBucket: "mna-munna-photographer.appspot.com",
  messagingSenderId: "833872553106",
  appId: "1:833872553106:web:d1724b7430c203b780324b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;
