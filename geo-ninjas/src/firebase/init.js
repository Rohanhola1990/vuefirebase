import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJStfF1Z_j4W9pd1ifChpagzSTig3eivE",
    authDomain: "udemy-geo-ninjas-d477f.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-d477f.firebaseio.com",
    projectId: "udemy-geo-ninjas-d477f",
    storageBucket: "",
    messagingSenderId: "577604886965",
    appId: "1:577604886965:web:3d4fb117d69fa54d"
  };
  // Initialize Firebase
const firebaseApp = letfirebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();