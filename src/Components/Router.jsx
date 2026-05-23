import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Events from "./pages/Events";
import Services from "./pages/Services";
import About from "./pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "services",

        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
