import axiosInstanceAPI from "../config/axios.config";
import { ISettings } from "../interfaces";

export const getAllSettings: (token: string) => Promise<ISettings> = async (
  token
) => {
  const { data } = await axiosInstanceAPI.get("/settings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addSettings: ({
  dataForm,
  token,
}: {
  dataForm: ISettings;
  token: string;
}) => Promise<ISettings> = async ({ dataForm, token }) => {
  const formData = new FormData();
  formData.append("name", dataForm.name || "");
  formData.append("email", dataForm.email || "");
  formData.append("address", dataForm.address || "");
  formData.append("facebook", dataForm.facebook || "");
  formData.append("instagram", dataForm.instagram || "");
  formData.append("phone", dataForm.phone || "");
  formData.append("twitter", dataForm.twitter || "");
  formData.append("youtube", dataForm.youtube || "");
  formData.append("tiktok", dataForm.tiktok || "");
  const { data } = await axiosInstanceAPI.post("/settings", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateSettings: ({
  dataForm,
  token,
  id,
}: {
  dataForm: ISettings;
  token: string;
  id: string;
}) => Promise<ISettings> = async ({ dataForm, token, id }) => {
  const formData = new FormData();
  formData.append("name", dataForm.name || "");
  formData.append("email", dataForm.email || "");
  formData.append("address", dataForm.address || "");
  formData.append("facebook", dataForm.facebook || "");
  formData.append("instagram", dataForm.instagram || "");
  formData.append("phone", dataForm.phone || "");
  formData.append("twitter", dataForm.twitter || "");
  formData.append("youtube", dataForm.youtube || "");
  formData.append("tiktok", dataForm.tiktok || "");
  formData.append("_method", "patch");
  const { data } = await axiosInstanceAPI.post(`/settings/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
