import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import muohService from "../../services/muohService";
import Form from "./components/Form/Form";
import { useEffect } from "react";

const Properties = (() => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate()

  const fetchProperties = muohService.fetchProperties()

  useEffect(() => {
    (async () => muohService.fetchProperties())()
  }, [fetchProperties])

  return (
    <div>
      <h2>Properties</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
      <button type="button" onClick={() => navigate("/beers")}>
        beers
      </button>
      <Form />
    </div>
  )
});

export default Properties;
