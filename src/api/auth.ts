import axiosInstanceAPI from "../config/axios.config";
import {
  ILogin,
  ILoginResponse,
  IRegister,
  IRegisterResponse,
} from "../interfaces";

export const login: ({
  email,
  password,
}: ILogin) => Promise<ILoginResponse> = async ({ email, password }) => {
  const { data } = await axiosInstanceAPI.post("/login", {
    email,
    password,
  });
  return data;
};

export const register: ({
  formData,
  token,
}: {
  formData: IRegister;
  token: string;
}) => Promise<IRegisterResponse> = async ({ formData, token }) => {
  const { data } = await axiosInstanceAPI.post("register", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
