import type { LoginCredentials } from "../types/auth.type";
import api from "./axios.config";

export const authApi = {
  login: async (data: LoginCredentials) => {
    const response = await api.post("/auth/sign-in", data);
    return response.data;
  },
  getMe: async () => {
    const response = await api.get("user");
    return response.data;
  },
};
