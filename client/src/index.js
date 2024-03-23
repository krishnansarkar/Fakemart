import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./components/pages/HomePage/Home-page";
import ErrorPage from "./components/pages/Error-page";
import MenusPage from "./components/pages/MenusPage/Menus-page";
import CateringPage from "./components/pages/Catering-page";
import ContactUsPage from "./components/pages/ContactUsPage/ContactUs-page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menus",
        element: <MenusPage />,
      },
      {
        path: "/catering",
        element: <CateringPage />,
      },
      {
        path: "/ContactUs",
        element: <ContactUsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
