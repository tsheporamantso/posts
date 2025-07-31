import { useQuery } from "@tanstack/react-query";
import customFetch from "../axios/utils";

export const useFetchTasks = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await customFetch("/posts");
      return data.slice(0, 5);
    },
  });
  return { isLoading, data, isError };
};
