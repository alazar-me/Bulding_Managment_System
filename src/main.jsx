import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./admin/pages/dashboard.jsx";
import Massage from "./admin/pages/massage.jsx";
import AdminRoot from "./routes/adminRoot.jsx";
import ErrorPage from "./error-page.jsx";
import Data from "./admin/pages/data.jsx";
import Notification from "./admin/pages/notification.jsx";
import Registration from "./admin/pages/registration.jsx";
// import Login from "./admin/pages/login.jsx";
// import SingUp from "./admin/pages/signUp-page.jsx";

import BuildingDetailDashboard from "./admin/pages/Building-Detail-Dashboard.jsx";
import UserLandingPage from "./users/pages/user-landing-page.jsx";
import MassageBox from "./assets/components/massage-box.jsx";
import UserDetailPage from "./admin/pages/user-detail-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "buildings/:buildingId",
        element: <Dashboard />,
      },
      {
        path: "data/:Id",
        element: <Data />,
      },
      {
        path: "massage/:Id",
        element: <Massage />,
      },
      {
        path: "notification/:Id",
        element: <Notification />,
      },
      {
        path: "registration/:Id",
        element: <Registration />,
      },
      {
        path: "BuildingDetailDashboard/:Id",
        element: <BuildingDetailDashboard />,
      },
    ],
  },
  {
    path: "home/",
    element: <UserLandingPage />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "report/:Id",
        element: <MassageBox />,
      },
    ],
  },
  {
    path: "detail/:Id",
    element: <UserDetailPage />,
  },

  // {
  //   path: "login/",
  //   element: <Login />,
  // },
  // {
  //   path: "signup/",
  //   element: <SingUp />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
