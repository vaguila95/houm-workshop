import { createContext, useEffect, useState } from "react";
import "./App.css";
import { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

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

const useAuthentication = () => {
  const authContext = useContext(authenticationContext);
  if (!authContext) {
    throw new Error(
      "useAuthentication debe estar dentro del proveedor de contexto authenticationContext"
    );
  }
  return authContext;
};

const BeersApp = () => {
  const { handleLogout } = useAuthentication();
  return (
    <div>
      <h2>Beers App</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};

const Landing = () => {
  const { handleLogin } = useAuthentication();
  return (
    <div>
      <h2>Landing</h2>
      <button type="button" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

function App() {
  const { isLoggedIn, redirectURL } = useAuthentication();
  return (
      <div className="App">
        <h1>Nuestra super app</h1>
        <h4>{isLoggedIn ? "bienvenido" : "debes iniciar sesión"}</h4>
        <Routes>
          <Route path="/beers" Component={BeersApp} />
          <Route path="/" Component={Landing} />
          <Route path="*" element={<Navigate to={redirectURL} replace />}/>
        </Routes>
      </div>
  );
}

export default App;
