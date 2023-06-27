import axios, {AxiosResponse} from "axios";

import { IPropertyResponse } from "./types";

const muohService = {
  fetchProperties: (): Promise<AxiosResponse<IPropertyResponse[]>> => {
    const headers = {
      "Content-Type": "application/json",
    }
    return axios.get(`localhost:8000/properties`, { headers });
  }
}

export default muohService;
