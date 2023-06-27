import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const authenticationContext = createContext({
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogout: () => {},
  redirectURL: "/",
});

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("isLoggedIn"))
  );
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/beers");
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if(!isLoggedIn){
      navigate("/");
    }
  },[isLoggedIn, navigate]);

  const redirectURL = isLoggedIn ? "/beers" : "/";

  return (
    <authenticationContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout,
        redirectURL,
      }}
    >
      {children}
    </authenticationContext.Provider>
  );
};

export default authenticationContext;