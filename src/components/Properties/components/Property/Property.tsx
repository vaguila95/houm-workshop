import IProperty from "../../../../models/Property";


const Property = ({ name, address }: IProperty) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  );
}

export default Property;