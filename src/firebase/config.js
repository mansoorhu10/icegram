// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJU9yrkOWXPQvd5Wh8Xj7D1iaQwxu7f2Q",
    authDomain: "icegram-ac0a8.firebaseapp.com",
    projectId: "icegram-ac0a8",
    storageBucket: "icegram-ac0a8.appspot.com",
    messagingSenderId: "137699999012",
    appId: "1:137699999012:web:d9e0f8f3037d2a941147b1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();  
const timeStamp = serverTimestamp();



export { projectStorage, projectFirestore, timeStamp };