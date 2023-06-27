import { useMutation, useQueryClient } from "react-query";

import muohService from "../../../services/muohService";
import { IFormData } from "../components/Form/Form";

const usePostProperty = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (property: IFormData) => muohService.postProperty(property),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("properties");
      }
    }
  );

  return { mutate, isLoading, isError, isSuccess };
};

export default usePostProperty;
