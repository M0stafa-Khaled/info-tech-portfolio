import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getAllPublicProjects,
  getProjectById,
  updateProject,
} from "../../api/projects";
import { QUERY_KEYS } from "./queryKeys";
import { IAddProject } from "../../interfaces";

export const useGetAllPublicProjects = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PROJECTS],
    queryFn: () => getAllPublicProjects(),
    retry: false,
  });
};

export const useGetAllProjects = (token: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PROJECTS],
    queryFn: () => getAllProjects(token),
  });
};

export const useGetProjectById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ONE_PROJECT, id],
    queryFn: () => getProjectById(id),
    retry: 3,
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      dataForm,
      token,
    }: {
      dataForm: IAddProject;
      token: string;
    }) => createProject({ dataForm, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_PROJECTS],
      });
    },
  });
};
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      dataForm,
      token,
    }: {
      id: string;
      dataForm: IAddProject;
      token: string;
    }) => updateProject({ id, dataForm, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_PROJECTS],
      });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, token }: { id: string; token: string }) =>
      deleteProject({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_PROJECTS],
      });
    },
  });
};
