import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyAOM1LjTVW9F1EfLwhgy9HJGFYrOHX2rno",
    authDomain: "contact-f335d.firebaseapp.com",
    projectId: "contact-f335d",
    storageBucket: "contact-f335d.appspot.com",
    messagingSenderId: "783729896481",
    appId: "1:783729896481:web:22041da204044c59388760",
    measurementId: "G-GEEEL98WS5"
  });
  var db = firebaseApp.firestore();

  export {db};