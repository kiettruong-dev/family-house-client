import api from "./axios.config";

export const familyApi = {
  getAll: async () => {
    const response = await api.get("/families");
    return response.data;
  },
};
