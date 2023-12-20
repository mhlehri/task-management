import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <div>Hover</div>,
      },
    ],
  },
]);
