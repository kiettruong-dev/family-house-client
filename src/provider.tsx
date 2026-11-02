import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { theme } from "./themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Không tự động gọi lại API khi chuyển tab
      retry: 1, // Số lần thử lại khi gọi API thất bại
      staleTime: 1000 * 60 * 5, // Dữ liệu cũ trong 5 phút
    },
  },
});
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </QueryClientProvider>
  );
};
export default Providers;
