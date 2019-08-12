import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1ql5Z4Khc3senF0k59UXjD-X5V7bgUOc",
    authDomain: "udemy-ninja-chat-c31d8.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-c31d8.firebaseio.com",
    projectId: "udemy-ninja-chat-c31d8",
    storageBucket: "",
    messagingSenderId: "770135923066",
    appId: "1:770135923066:web:530fec037f776d9f"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();