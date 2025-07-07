

import { createContext, useContext, useState } from "react";
import usuarios from "../data/usuarios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (correo, password) => {
    const user = usuarios.find(u => u.correo === correo && u.password === password);
    if (user) setUsuario(user);
    return user;
  };

  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
