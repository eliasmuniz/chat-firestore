import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyALZuwUZqaolq--xioCoI66CKrO6ycKMNQ",
  authDomain: "chatya-280ba.firebaseapp.com",
  projectId: "chatya-280ba",
  storageBucket: "chatya-280ba.appspot.com",
  messagingSenderId: "442188171490",
  appId: "1:442188171490:web:1f6e5b2f6c0867814fb6bb",
}).auth();
