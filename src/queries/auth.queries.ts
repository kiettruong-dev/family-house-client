import { queryOptions } from "@tanstack/react-query";
import { authApi } from "../apis/auth.api";

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  accessToken: () => [...authKeys.all, "accessToken"] as const,
};

export const authQueries = {
  user: () =>
    queryOptions({
      queryKey: authKeys.user(),
      queryFn: () => authApi.getMe(),
      staleTime: 10 * 60 * 1000,
      retry: false,
    }),
};
