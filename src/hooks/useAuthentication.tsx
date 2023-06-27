import { useContext } from "react";
import authenticationContext from "../contexts/authenticationContext";

const useAuthentication = () => {
  const authContext = useContext(authenticationContext);
  if (!authContext) {
    throw new Error(
      "useAuthentication debe estar dentro del proveedor de contexto authenticationContext"
    );
  }
  return authContext;
};

export default useAuthentication