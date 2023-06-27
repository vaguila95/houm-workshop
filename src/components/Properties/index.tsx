import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";

const Properties = (() => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate()

  return (
    <div>
      <h2>Properties</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
      <button type="button" onClick={() => navigate("/beers")}>
        beers
      </button>
    </div>
  )
});

export default Properties;