import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";

const BeersApp = () => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate()

  return (
    <div>
      <h2>Beers App</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
      <button type="button" onClick={() => navigate("/properties")}>
        properties
      </button>
    </div>
  );
};

export default BeersApp;