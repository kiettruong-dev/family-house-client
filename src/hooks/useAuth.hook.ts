import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { authKeys, authQueries } from "../queries/auth.queries";
import { authApi } from "../apis/auth.api";
import { useNavigate } from "react-router-dom";
import type { LoginCredentials } from "../types/auth.type";
import { message } from "antd";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: user, isLoading: isInitializing } = useQuery(
    authQueries.user(),
  );

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(authKeys.user(), data);
      navigate("/");
      message.success("Đăng nhập thành công");
    },
    onError: (error) => {
      console.error(error);
      message.error("Login failed. Please check your credentials.");
    },
  });
  return {
    user,
    isInitializing,
    loginMutation,
  };
};
