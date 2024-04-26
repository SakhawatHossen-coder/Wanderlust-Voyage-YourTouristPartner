import React, { useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import Login from "../pages/Login";

export const AuthContext = createContext(null);


const auth = getAuth(app);

//social providers
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const twitterProvider=new TwitterAuthProvider();

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
const [user,setUser]=useState(null)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut =()=>{
    setLoading(true);
    return signOut(auth)
  }
//social login
function googleLogin(){
  setLoading(true);
  return signInWithPopup(auth,googleProvider);
}
function githubLogin(){
  setLoading(true);
  return signInWithPopup(auth,githubProvider);
}
function twitterLogin(){
  setLoading(true);
  return signInWithPopup(auth,twitterProvider);
}
//observer
useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser);
setLoading(false);
  })

  return () => {
   unsubscribe()
  }
}, [])


  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    githubLogin,
    googleLogin,
    twitterLogin,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProviders;
