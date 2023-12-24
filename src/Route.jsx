import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Layout";
import { SignIn } from "./Pages/Signin/Signin";
import { SignUp } from "./Pages/Signup/Signup";
import DashLayout from "./DashLayout";
import AddTask from "./Pages/Dashboard/Pages/AddTask";
import AllTask from "./Pages/Dashboard/Pages/AllTask";
import PrivateRoute from "./Private";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditTask from "./Pages/Dashboard/Pages/Edit";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all_tasks",
        element: (
          <PrivateRoute>
            <AllTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edit/:id",
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
