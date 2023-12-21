import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Layout";
import { SignIn } from "./Pages/Signin/Signin";
import { SignUp } from "./Pages/Signup/Signup";
import DashLayout from "./DashLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddTask from "./Pages/Dashboard/Pages/AddTask";
import AllTask from "./Pages/Dashboard/Pages/AllTask";

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
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add",
        element: <AddTask />,
      },
      {
        path: "/dashboard/all_tasks",
        element: <AllTask />,
      },
    ],
  },
]);
