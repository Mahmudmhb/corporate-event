import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  //   register
  const handleloginRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logout
  const logOut = () => {
    return signOut(auth);
  };
  const AuthInfo = {
    handleloginRegister,
    handleLogin,
    user,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if(currentUser)
      setUser(currentUser);
      //   console.log(currentUser);
    });
    return () => unsubscribe;
  });
  //   console.log(AuthInfo.name);
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
