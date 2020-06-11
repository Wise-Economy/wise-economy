// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE);

// Initialize Firebase
export let app = firebase.initializeApp(firebaseConfig);
