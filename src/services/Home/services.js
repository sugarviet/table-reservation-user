import { useMutation } from "@tanstack/react-query";
import { getAllTable } from "./callers";
import { notification } from "antd";
import { useQuery, useMutation, useQueryClient  } from "@tanstack/react-query";

export const useLogin = () => {
  return useQuery({
    queryKey: ["tables"],
    queryFn: () => getAllTable(),
  }, {
    staleTime: '100000'
  });
};