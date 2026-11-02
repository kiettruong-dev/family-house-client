import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Thay bằng Base URL của bạn
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Interceptor cho Request (VD: Thêm Bearer Token)
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Xử lý khi token hết hạn / chưa đăng nhập (VD: đá về trang login, gọi refresh token,...)
      console.warn("Unauthorized! Token có thể đã hết hạn.");
    }
    return Promise.reject(error);
  },
);
export default api;
