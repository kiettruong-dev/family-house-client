import { RouterProvider } from "react-router-dom";
import { ROOT_ROUTE } from "./routers";

function App() {
  return <RouterProvider router={ROOT_ROUTE} />;
}

export default App;
