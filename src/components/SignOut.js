import React from "react";
import "../App.css";
import { auth } from "../firebaseConfig";

const SignOut = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

export default SignOut;
