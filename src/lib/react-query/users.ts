import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/users";
import { QUERY_KEYS } from "./queryKeys";

export const useGetAllUsers = (token: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_USERS],
    queryFn: () => getAllUsers(token),
  });
};
