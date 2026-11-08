import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.hook";

const PublicRouter = () => {
  const { user } = useAuth();
  const isLogin = !!user;

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
