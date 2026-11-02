import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage";

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
