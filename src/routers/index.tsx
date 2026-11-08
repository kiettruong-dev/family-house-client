import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import PublicRouter from "../components/routers/pulicRouter";
import { ProtectedRouter } from "../components/routers/protectedRouter";

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: "/",
    element: <PublicRouter />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRouter />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
