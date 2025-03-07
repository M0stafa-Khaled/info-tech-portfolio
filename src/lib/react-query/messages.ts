import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { sendMessage, getAllMessages } from "../../api/messages";
import { IAddMessage } from "../../interfaces";

export const useGetAllMessages = (token: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_MESSAGES],
    queryFn: () => getAllMessages(token),
  });
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (message: IAddMessage) => sendMessage(message),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_MESSAGES],
      });
    },
  });
};
