import { useQuery, UseQueryResult } from "react-query";
import muohService from "../../../services/muohService"
import IProperty from "../../../models/Property";
import parseProperties from "../utils";

const useGetProperties = () => {
  const { data, isError, isLoading }: UseQueryResult<IProperty[], Error> = useQuery<IProperty[], Error>(
    "properties",
    async () => {
      const response = await muohService.fetchProperties();
      return parseProperties(response.data);
    }
  );
  return { data, isError, isLoading }
};

export default useGetProperties;
