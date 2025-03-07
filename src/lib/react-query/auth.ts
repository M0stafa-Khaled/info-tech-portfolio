import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "../../api/auth";
import { IRegister } from "../../interfaces";
import { QUERY_KEYS } from "./queryKeys";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({
        email,
        password,
      }),
  });
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ formData, token }: { formData: IRegister; token: string }) =>
      register({ formData, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_USERS],
      });
    },
  });
};
