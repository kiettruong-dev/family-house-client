import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Cookies from "js-cookie";
import { authKeys, authQueries } from "../queries/auth.queries";
import { authApi } from "../apis/auth.api";
import { useNavigate } from "react-router-dom";
import type { LoginCredentials } from "../types/auth.type";
import { message } from "antd";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(Cookies.get("at") || null);

  const { data: user, isLoading: isInitializing } = useQuery(
    authQueries.user(accessToken),
  );

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      navigate("/");

      queryClient.setQueryData(authKeys.user(), data.user);
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
