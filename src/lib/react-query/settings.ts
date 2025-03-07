import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import {
  addSettings,
  getAllSettings,
  updateSettings,
} from "../../api/settings";
import { ISettings } from "../../interfaces";

export const useGetAllSettings = (token: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_SETTINGS],
    queryFn: () => getAllSettings(token),
  });
};

export const useAddSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ dataForm, token }: { dataForm: ISettings; token: string }) =>
      addSettings({ dataForm, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_SETTINGS],
      });
    },
  });
};

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      dataForm,
      id,
      token,
    }: {
      dataForm: ISettings;
      id: string;
      token: string;
    }) => updateSettings({ dataForm, id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_SETTINGS],
      });
    },
  });
};
