import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import Login from "../pages/Login";

export const AuthContext = createContext(null);


const auth = getAuth(app);


const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    createUser,
    logIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProviders;
