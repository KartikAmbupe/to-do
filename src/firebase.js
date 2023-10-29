import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import{getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth= getAuth()
  export async function signIn(email, password) {
    await auth.signInWithEmailAndPassword(email, password);
  }
  const db = getDatabase(app);
  export {app, analytics,db,auth};
  