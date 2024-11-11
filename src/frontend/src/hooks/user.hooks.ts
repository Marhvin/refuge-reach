import { User } from "shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCurrentUser,
  loginUser,
  loginUserWithRefreshToken,
  logoutCurrentUser,
} from "../api/user.api";
import { AxiosError } from "axios";

export const useCurrentUser = () => {
  return useQuery<User, AxiosError>({
    queryKey: ["getUser"],
    queryFn: getCurrentUser,
    retry: false,
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation<
    void,
    Error,
    { code: string | null; scope: string | null }
  >({
    mutationKey: ["loginUser"],
    mutationFn: async ({ code, scope }) => {
      await loginUser(code, scope);
      window.location.href = "/login";
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    },
  });
};

export const useLoginUserWithRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, void>({
    mutationKey: ["loginUserWithRefreshToken"],
    mutationFn: async () => {
      await loginUserWithRefreshToken();
      window.location.href = "/login";
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    },
  });
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, void>({
    mutationKey: ["logoutUser"],
    mutationFn: async () => {
      await logoutCurrentUser();
      window.location.href = "/login";
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    },
  });
};
