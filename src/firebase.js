// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCsNUftK4m0bBBi1IlnCl--6bt7Ri_ZqFo',
  authDomain: 'notes-2214b.firebaseapp.com',
  projectId: 'notes-2214b',
  storageBucket: 'notes-2214b.appspot.com',
  messagingSenderId: '1063835994841',
  appId: '1:1063835994841:web:cc1120b11d38f3577f0cc8',
  measurementId: 'G-B00VVX1L7V',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
