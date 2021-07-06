import firebase from 'firebase'

require("@firebase/firestore")




  var firebaseConfig = {
    apiKey: "AIzaSyCkX0wc0X4ozGcRv-_1JGMiz5ZOdm1b7bE",
    authDomain: "story-hub-2b7f0.firebaseapp.com",
    databaseURL: "https://story-hub-2b7f0-default-rtdb.firebaseio.com",
    projectId: "story-hub-2b7f0",
    storageBucket: "story-hub-2b7f0.appspot.com",
    messagingSenderId: "65025729198",
    appId: "1:65025729198:web:8b77b6c9cf25db1219c33f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default  firebase.firestore()