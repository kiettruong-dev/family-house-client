// src/queries/auth.queries.ts
import { queryOptions } from "@tanstack/react-query";
import { authApi } from "../apis/auth.api";

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
};

export const authQueries = {
  user: (token: string | null) =>
    queryOptions({
      queryKey: authKeys.user(),
      queryFn: authApi.getMe,
      enabled: !!token,
      staleTime: 10 * 60 * 1000,
      retry: false,
    }),
};
