import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import Form, { IFormData } from "./components/Form/Form";

const Properties = (() => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate()

  const handleSubmit = (formData: IFormData) => {
    console.log(formData);
    
  }

  return (
    <div>
      <h2>Properties</h2>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
      <button type="button" onClick={() => navigate("/beers")}>
        beers
      </button>
      <Form onSubmit={handleSubmit}/>
    </div>
  )
});

export default Properties;
