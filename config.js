import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB5c1pTELQkYW-8I2RsEhEXSVCvJShs9oM",
  authDomain: "bed-time-stories-bb565.firebaseapp.com",
  projectId: "bed-time-stories-bb565",
  storageBucket: "bed-time-stories-bb565.appspot.com",
  messagingSenderId: "993097600737",
  appId: "1:993097600737:web:fde696f03e8da5a7a7f1a0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
