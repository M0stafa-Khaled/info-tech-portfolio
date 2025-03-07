import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  addCategory,
} from "../../api/categories";
import { QUERY_KEYS } from "./queryKeys";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
    queryFn: () => getAllCategories(),
    retry: false,
  });
};

export const useGetCategoryById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ONE_CATEGORY, id],
    queryFn: () => getCategoryById(id),
  });
};

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ name, token }: { name: string; token: string }) =>
      addCategory({ name, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
      });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      name,
      token,
    }: {
      id: string;
      name: string;
      token: string;
    }) => updateCategory({ id, name, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
      });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, token }: { id: string; token: string }) =>
      deleteCategory({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
      });
    },
  });
};
