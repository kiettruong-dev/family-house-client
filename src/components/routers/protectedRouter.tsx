import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.hook";
import { Spin } from "antd";

export const ProtectedRouter = () => {
  const { user, isInitializing } = useAuth();
  const isLogin = !!user;
  if (isInitializing) {
    return (
      <div className="flex-col gap-4 w-screen h-screen flex justify-center items-center">
        <Spin description="Loading..." size="large" />
      </div>
    );
  }
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
