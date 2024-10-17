import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home  from "./pages/Home.jsx";
import About from "./pages/about/About.jsx";
import Resume from "./pages/Resume.jsx";
import Services from "./pages/Services.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./pages/about/Info.jsx";
import Me from "./pages/about/Me.jsx";

const routes = [
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"me",
            element:<Me/>
          },
          {
            path:"info",
            element:<Info/>
          }
        ]
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ]
  },
  // {
  //   path:"*",
  //   element: <div className="h-screen flex items-center justify-center text-black">404 - not found</div>
  // }
 
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
