import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const handleloginRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = {
    handleloginRegister,
  };
  //   console.log(AuthInfo.name);
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
