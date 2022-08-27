import { createContext, useState } from "react";

export const Authcontext = createContext();

export function Authcontextprovider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  function Loginuser(email, token) {
    setIsAuth(true);
    setEmail(email);
    setToken(token);
  }
  function Logout() {
    setIsAuth(false);
    setToken(null);
    setEmail("");
  }
  return (
    <Authcontext.Provider value={{ Loginuser, Logout, isAuth, token, email }}>
      {children}
    </Authcontext.Provider>
  );
}
