import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./components/Login";
import { ClientSelection } from "./components/ClientSelection";
import { OnboardClient } from "./components/OnboardClient";
import { ConnectDataSource } from "./components/ConnectDataSource";
import { ClientManagement } from "./components/ClientManagement";
import Dashboard from "./components/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/clients",
    element: <ClientSelection />,
  },
  {
    path: "/onboard",
    element: <OnboardClient />,
  },
  {
    path: "/connect-source",
    element: <ConnectDataSource />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/client-management",
    element: <ClientManagement />,
  },
]);
