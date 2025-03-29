import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  
useEffect(()=>{
  const {employees,admin} = getLocalStorage()
setUserData({employees,admin})

   },[])

   

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

