import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import{getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAg62hPW6-_wbRsZGRnw8H1FOr4ulO0x-4",
    authDomain: "to-do-93999.firebaseapp.com",
    projectId: "to-do-93999",
    storageBucket: "to-do-93999.appspot.com",
    messagingSenderId: "11953481175",
    appId: "1:11953481175:web:aedcc315e89a172a211792",
    measurementId: "G-E0LHEG68FC"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth()
  export async function signIn(email, password) {
    await auth.signInWithEmailAndPassword(email, password);
  }
  const db = getDatabase(app);
  export {app, analytics,db,auth};
  