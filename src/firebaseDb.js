// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyDyzcyxcHkTxSunQNxFNbuZ_D8b_R6aKAU",
//     authDomain: "classromz.firebaseapp.com",
//     databaseURL: "https://classromz-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "classromz",
//     storageBucket: "classromz.appspot.com",
//     messagingSenderId: "58830387975",
//     appId: "1:58830387975:web:7c2f959d39bdf36125e3a2",
//     measurementId: "G-NZEFJWB8DL"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();
// export default firebaseApp;
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDyzcyxcHkTxSunQNxFNbuZ_D8b_R6aKAU",
    authDomain: "classromz.firebaseapp.com",
    databaseURL: "https://classromz-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "classromz",
    storageBucket: "classromz.appspot.com",
    messagingSenderId: "58830387975",
    appId: "1:58830387975:web:7c2f959d39bdf36125e3a2",
    measurementId: "G-NZEFJWB8DL"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;