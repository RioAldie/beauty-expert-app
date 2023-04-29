// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxmI_-7M_Uu0JBBP3G1Wr4zEGljR0lQfM',
  authDomain: 'beauty-server-2ef90.firebaseapp.com',
  projectId: 'beauty-server-2ef90',
  storageBucket: 'beauty-server-2ef90.appspot.com',
  messagingSenderId: '991558127927',
  appId: '1:991558127927:web:a7bb61a47d5332e212cab2',
  measurementId: 'G-821F6N83XC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
