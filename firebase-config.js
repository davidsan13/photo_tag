// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDiABUogwG4FWuIudV0kl7wtlwgjgVZKg',
  authDomain: 'photo-tag-306a4.firebaseapp.com',
  projectId: 'photo-tag-306a4',
  storageBucket: 'photo-tag-306a4.appspot.com',
  messagingSenderId: '555290436251',
  appId: '1:555290436251:web:d605e11a8141199fec9c3e',
  measurementId: 'G-JM0KL09RGM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
