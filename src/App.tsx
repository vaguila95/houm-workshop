import "./App.css";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuthentication from "./hooks/useAuthentication";
import BeersApp from "./components/BeersApp";
import Landing from "./components/Landing";
import Properties from "./components/Properties";
import Logo from "./assets/muohLogo.png";


function App() {
  const { isLoggedIn, redirectURL } = useAuthentication();
  return (
      <div className="App">
        <img src={Logo} alt="logo" className="App-logo"/>
        <h1>Muoh</h1>
        <h4>{isLoggedIn ? "bienvenido" : "debes iniciar sesión"}</h4>
        <Routes>
          <Route path="/beers" Component={BeersApp} />
          <Route path="/properties" Component={Properties} />
          <Route path="/" Component={Landing} />
          <Route path="*" element={<Navigate to={redirectURL} replace />}/>
        </Routes>
      </div>
  );
}

export default App;
