import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAe1MJ15GOlv8o7s1NBD_JQobQ9RrmYpys",
    authDomain: "contactmanager-40e17.firebaseapp.com",
    databaseURL: "https://contactmanager-40e17.firebaseio.com",
    projectId: "contactmanager-40e17",
    storageBucket: "contactmanager-40e17.appspot.com",
    messagingSenderId: "860184575364",
    appId: "1:860184575364:web:0e81c6016ca431f4d931d1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;