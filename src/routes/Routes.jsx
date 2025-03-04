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
import UpdatePage from "../pages/UpdatePage";
import CountryCard from "../components/countries/CountryCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-side-ass10.vercel.app/tourist"),
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
        // loader: () => fetch("https://server-side-ass10.vercel.app/tourist"),
      },
      {
        path: "/tourist/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-ass10.vercel.app/tourist/${params.id}`),
      },
      {
        path: "/mylistpage",
        element: (
          <PrivateRoutes>
            <MyListPage />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/tourist/update/:id",
        element: (
          <PrivateRoutes>
            <UpdatePage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-ass10.vercel.app/tourist/${params.id}`),
      },
      {
        path: "/tourist/countries/:countryName",
        element: <CountryCard />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-ass10.vercel.app/tourist/countries/${params.countryName}`
          ),
      },
    ],
  },
]);

export default router;
