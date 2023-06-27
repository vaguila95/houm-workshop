import axios, {AxiosResponse} from "axios";

import { IPropertyResponse } from "./types";

const headers = {
  "Content-Type": "application/json",
}

const muohService = {
  fetchProperties: (): Promise<AxiosResponse<IPropertyResponse[]>> => {
    return axios.get(`http://localhost:8000/properties`, { headers });
  },
  postProperty: ({ name, address }: { name: string, address: string }): Promise<AxiosResponse<IPropertyResponse>> => {
    return axios.post(`http://localhost:8000/properties`, { name, address }, { headers });
  }
}

export default muohService;
