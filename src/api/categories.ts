import axiosInstanceAPI from "../config/axios.config";
import { ICategoriesResponse, ICategory } from "../interfaces";

export const getAllCategories: () => Promise<ICategoriesResponse> =
  async () => {
    const { data } = await axiosInstanceAPI.get("/Category");
    return data;
  };

export const getCategoryById: (
  id: string
) => Promise<{ data: ICategory }> = async (id) => {
  const { data } = await axiosInstanceAPI.get(`/Category/${id}`);
  return data;
};

interface IAddCategory {
  name: string;
  token: string;
}
export const addCategory: ({ name, token }: IAddCategory) => Promise<{
  message: string;
  data: ICategory;
}> = async ({ name, token }) => {
  const { data } = await axiosInstanceAPI.post(
    "/Category/create",
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const updateCategory: ({
  id,
  name,
  token,
}: {
  id: string;
  name: string;
  token: string;
}) => Promise<{ message: string; data: ICategory }> = async ({
  id,
  name,
  token,
}) => {
  const { data } = await axiosInstanceAPI.post(
    `Category/update/${id}?_method=put`,
    {
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const deleteCategory: ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => Promise<{ message: string }> = async ({ id, token }) => {
  const { data } = await axiosInstanceAPI.delete(`/Category/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
