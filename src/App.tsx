import "./App.css";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuthentication from "./hooks/useAuthentication";


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
