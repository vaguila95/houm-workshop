// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthentication from "../../hooks/useAuthentication";
// import muohService from "../../services/muohService";
// import IProperty from "../../models/Property";
import Form, { IFormData } from "./components/Form/Form";
// import parseProperties from "./utils";
import Property from "./components/Property/Property";
import useGetProperties from "./hooks/useGetProperties";
import usePostProperty from "./hooks/usePostProperty";

const Properties = (() => {
  const { handleLogout } = useAuthentication();
  const navigate = useNavigate()
  const { data: properties, isError, isLoading } = useGetProperties();
  const { mutate } = usePostProperty()

  const handleSubmit = (data: IFormData) => mutate(data)

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something went wrong</p>

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
      {properties?.map((property) => (
        <Property key={property.id} {...property} />
      ))}
    </div>
  )
});

export default Properties;
