import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCTOJlmJwj3_iYy50Gg7X6FBicYS7xt__8",
  authDomain: "chat-app-d555e.firebaseapp.com",
  projectId: "chat-app-d555e",
  storageBucket: "chat-app-d555e.appspot.com",
  messagingSenderId: "820944814795",
  appId: "1:820944814795:web:46d6b3e752f3f23303514e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
