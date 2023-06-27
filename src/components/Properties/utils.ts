import IProperty from "../../models/Property";
import { IPropertyResponse } from "../../services/types";

const parseProperties = (properties: IPropertyResponse[]): IProperty[] => properties.map(prop => ({
    id: prop.id,
    name: prop.name,
    address: prop.address,
    image: prop.image
  }))

export default parseProperties;