// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const env = process.env;
const firebaseConfig = {
  apiKey: `${env.API_KEY}`,
  authDomain: `${env.AUTH_DOMAIN}`,
  projectId: `${env.PROJECT_ID}`,
  storageBucket: `${env.STORAGE_BUCKET}`,
  messagingSenderId: `${env.MESSAGING_SENDER_ID}`,
  appId: `${env.APP_ID}`,
  measurementId: `${env.MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore();