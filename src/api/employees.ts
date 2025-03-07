import axiosInstanceAPI from "../config/axios.config";
import { IAddEmployee, IEmployee, IEmployeeResponse } from "../interfaces";

export const getAllEmployees: (
  token: string
) => Promise<IEmployeeResponse> = async (token) => {
  const response = await axiosInstanceAPI.get("/employees", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getEmployeeById: ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => Promise<{
  success: boolean;
  data: IEmployee;
}> = async ({ id, token }) => {
  const { data } = await axiosInstanceAPI.get(`/employees/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteEmployee: ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => Promise<{
  success: boolean;
  message: string;
}> = async ({ id, token }) => {
  const { data } = await axiosInstanceAPI.delete(`/employees/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addEmployee: ({
  dataForm,
  token,
}: {
  dataForm: IAddEmployee;
  token: string;
}) => Promise<{
  success: boolean;
  data: IEmployee;
  message: string;
}> = async ({ dataForm, token }) => {
  const formData = new FormData();
  formData.append("image", dataForm.image);
  formData.append("user_id", dataForm.user_id);
  formData.append("specialization", dataForm.specialization);
  const { data } = await axiosInstanceAPI.post("employees", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateEmployee: ({
  id,
  dataForm,
  token,
}: {
  id: string;
  dataForm: IAddEmployee;
  token: string;
}) => Promise<{
  success: boolean;
  data: IEmployee;
  message: string;
}> = async ({ dataForm, token, id }) => {
  const formData = new FormData();
  formData.append("image", dataForm.image);
  formData.append("user_id", dataForm.user_id);
  formData.append("specialization", dataForm.specialization);
  const { data } = await axiosInstanceAPI.put(`employees/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
