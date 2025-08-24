import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    setLocalStorage();
  }, []);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const updateUserData = () => {
      const { employees, admin } = getLocalStorage();
      setUserData({ employees, admin });
    };
    updateUserData();

    window.addEventListener("employeesUpdated", updateUserData);
    return () => window.removeEventListener("employeesUpdated", updateUserData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
