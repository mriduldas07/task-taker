import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import AddTask from "../pages/AddTask";
import AllTasks from "../pages/AllTasks";
import Dashboard from "../pages/Dashboard";
import EditTask from "../pages/EditTask";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordChange from "../pages/PasswordChange";
import Pricing from "../pages/Pricing";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tasks",
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tasks/add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/update-profile/change-pass",
        element: (
          <PrivateRoute>
            <PasswordChange />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tasks/edit-task/:id",
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
