import React, { useContext, useState, useEffect } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        user.getIdTokenResult().then((idTokenResult) => {
          setRole(idTokenResult.claims.role);
        });
      } else {
        setUser(null);
        setRole(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, role}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
