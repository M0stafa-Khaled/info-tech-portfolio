import axiosInstanceAPI from "../config/axios.config";
import { IUser } from "../interfaces";

export const getAllUsers: (token: string) => Promise<IUser[]> = async (
  token
) => {
  const { data } = await axiosInstanceAPI.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
