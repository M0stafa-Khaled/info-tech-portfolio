import axiosInstanceAPI from "../config/axios.config";
import { IAddMessage, IResponseMessages } from "../interfaces";

export const getAllMessages: (
  token: string
) => Promise<IResponseMessages> = async (token) => {
  const { data } = await axiosInstanceAPI.get("/contact", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const sendMessage: (
  message: IAddMessage
) => Promise<{ status: string; message: string }> = async (message) => {
  const { data } = await axiosInstanceAPI.post("/contact", message);
  return data;
};
