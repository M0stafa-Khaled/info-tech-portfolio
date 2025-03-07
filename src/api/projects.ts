import axiosInstanceAPI from "../config/axios.config";
import { IAddProject, IProject, IProjectsResponse } from "../interfaces";

export const getAllPublicProjects: () => Promise<IProjectsResponse> =
  async () => {
    const { data } = await axiosInstanceAPI.get("/projects_nothidden");
    return data;
  };
export const getAllProjects: (
  token: string
) => Promise<IProjectsResponse> = async (token) => {
  const { data } = await axiosInstanceAPI.get("/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getProjectById: (
  id: string
) => Promise<{ data: IProject }> = async (id) => {
  const { data } = await axiosInstanceAPI.get(`/projects/${id}`);
  return data;
};

export const createProject: ({
  dataForm,
  token,
}: {
  dataForm: IAddProject;
  token: string;
}) => Promise<{ message: string; data: IProject }> = async ({
  dataForm,
  token,
}) => {
  const formData = new FormData();
  formData.append("title", dataForm.title);
  formData.append("descriptions", dataForm.descriptions);
  formData.append("url", dataForm.url);
  formData.append("category_id", dataForm.category_id.toString());
  formData.append("tool", dataForm.tool);
  formData.append("hidden", dataForm.hidden ? "1" : "0");
  dataForm.image.forEach((image) => {
    formData.append("image[]", image);
  });
  const { data } = await axiosInstanceAPI.post("/projects/create", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateProject: ({
  id,
  dataForm,
  token,
}: {
  id: string;
  dataForm: IAddProject;
  token: string;
}) => Promise<{ message: string; data: IProject }> = async ({
  id,
  dataForm,
  token,
}) => {
  const formData = new FormData();
  formData.append("title", dataForm.title);
  formData.append("descriptions", dataForm.descriptions);
  formData.append("url", dataForm.url);
  formData.append("category_id", dataForm.category_id.toString());
  formData.append("tool", dataForm.tool);
  formData.append("hidden", dataForm.hidden ? "1" : "0");
  dataForm.image.forEach((image) => {
    formData.append("image[]", image);
  });
  const { data } = await axiosInstanceAPI.post(
    `/projects/update/${id}?_method=put`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const deleteProject: ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => Promise<{ message: string }> = async ({ id, token }) => {
  const { data } = await axiosInstanceAPI.delete(`/projects/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
