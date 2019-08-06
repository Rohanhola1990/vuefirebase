import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8ejQO3VCK3wkZWI93hZxK3OInhyzOec4",
    authDomain: "udemy-ninja-ninjas.firebaseapp.com",
    databaseURL: "https://udemy-ninja-ninjas.firebaseio.com",
    projectId: "udemy-ninja-ninjas",
    storageBucket: "udemy-ninja-ninjas.appspot.com",
    messagingSenderId: "514040210897",
    appId: "1:514040210897:web:3461add50cf15e1a"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({timestampsInSnapshots: true});

//   export firestore database
export default firebaseApp.firestore();