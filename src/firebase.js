import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBgnV4igKtbEEACJA5LqXA6ClnQ5S1pr54",
    authDomain: "my-f4f2f.firebaseapp.com",
    databaseURL: "https://my-f4f2f.firebaseio.com",
    projectId: "my-f4f2f",
    storageBucket: "my-f4f2f.appspot.com",
    messagingSenderId: "59344382928",
    appId: "1:59344382928:web:cb13f6d25537e2702467d5",
    measurementId: "G-ZX6M4YJ329"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};