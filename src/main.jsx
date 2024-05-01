import * as React from "react";
import Login from "./admin/pages/login.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./admin/pages/dashboard.jsx";
import Massage from "./admin/pages/massage.jsx";
import AdminRoot from "./routes/adminRoot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminRoot />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/massage",
    element: <Massage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
