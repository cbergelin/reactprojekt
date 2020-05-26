import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDJ7VUXhPCeB9yOPUn_F1oG0MUFcic78yc",
    authDomain: "reactproject-ad28a.firebaseapp.com",
    databaseURL: "https://reactproject-ad28a.firebaseio.com",
    projectId: "reactproject-ad28a",
    storageBucket: "reactproject-ad28a.appspot.com",
    messagingSenderId: "263781738529",
    appId: "1:263781738529:web:f826140358bda4ac145b60",
    measurementId: "G-WFP0C0E5S3"
  };

  firebase.initializeApp(firebaseConfig);


  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Lite andra kommer sen

  export const auth = firebase.auth();

  export default firebase;