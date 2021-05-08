import React from "react";
import "../App.css";
import firebase from "firebase/app";
import { auth } from "../firebaseConfig.js";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button className='sign-in' onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
