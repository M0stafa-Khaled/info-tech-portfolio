import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import {
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  addEmployee,
  updateEmployee,
} from "../../api/employees";
import { IAddEmployee } from "../../interfaces";

export const useGetAllEmployees = (token: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_EMPLOYEES],
    queryFn: () => getAllEmployees(token),
    retry: false,
  });
};

export const useGetEmployeeById = ({
  id,
  token,
}: {
  id: string;
  token: string;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_EMPLOYEE, id],
    queryFn: () => getEmployeeById({ id, token }),
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, token }: { id: string; token: string }) =>
      deleteEmployee({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_EMPLOYEES],
      });
    },
  });
};

export const useAddEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      dataForm,
      token,
    }: {
      dataForm: IAddEmployee;
      token: string;
    }) => addEmployee({ dataForm, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_EMPLOYEES],
      });
    },
  });
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      dataForm,
      token,
    }: {
      id: string;
      dataForm: IAddEmployee;
      token: string;
    }) => updateEmployee({ id, dataForm, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_ALL_EMPLOYEES],
      });
    },
  });
};
