import firebase from "firebase";
import { initializeApp } from 'firebase/app';

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
    apiKey: "AIzaSyBxbU6z4xONsfkITH7LaB7XFnHnmwbZoKY",
    authDomain: "abacaxi-quebrado.firebaseapp.com",
    projectId: "abacaxi-quebrado",
    storageBucket: "abacaxi-quebrado.appspot.com",
    messagingSenderId: "925117264700",
    appId: "1:925117264700:web:df15ec57df65a44e57e439"
  });
  // Initialize Firebase
var db = firebaseApp.firestore();

export { db };
