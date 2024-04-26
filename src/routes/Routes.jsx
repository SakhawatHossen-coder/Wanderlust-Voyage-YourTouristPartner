import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import PrivateRoutes from "./PrivateRoutes";
import SpotPage from "../pages/SpotPage";
import ViewDetails from "../pages/ViewDetails";
const router = createBrowserRouter([
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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtouristspot",
        element: (
          // <PrivateRoutes>
          <AddTouristSpot />
          // </PrivateRoutes>
        ),
      },
      {
        path: "/alltouristspot",
        element: <SpotPage />,
        loader: () => fetch("http://localhost:5000/tourist"),
      },
      {
        path: "/tourist/:id",
        element: (
          // <PrivateRoutes>
          <ViewDetails />
          // </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourist/${params.id}`),
      },
    ],
  },
]);

export default router;
