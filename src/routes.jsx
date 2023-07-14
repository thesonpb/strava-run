import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/Dashboard";
import SimpleLayout from "./Layouts/SimpleLayout/index.jsx";
import AppLayout from "./Layouts/AppLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "dashboard", element: <Dashboard /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}