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
import { ErroPage } from "../pages/ErroPage";
import MyListPage from "../pages/MyListPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/tourist"),
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
          <PrivateRoutes>
            <AddTouristSpot />
          </PrivateRoutes>
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
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourist/${params.id}`),
      },
      {
        path: "/mylistpage",
        element: <MyListPage />,
      },
    ],
  },
]);

export default router;
