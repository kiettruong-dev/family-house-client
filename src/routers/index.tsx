import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);
