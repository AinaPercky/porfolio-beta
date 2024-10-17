import React from "react";

import Home from "../pages/Home";
import About from "../pages/about/About";
import Me from "../pages/about/Me";
import Info from "../pages/about/Info";
import Resume from "../pages/Resume"
import Services from "../pages/Services";
import App from "../App";

export const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "me",
            element: <Me />,
          },
          {
            path: "info",
            element: <Info />,
          },
        ],
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
];

