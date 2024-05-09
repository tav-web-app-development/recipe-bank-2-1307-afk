import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newrecipe from "./Components/Newrecipe.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Newrecipe',
    element:<Newrecipe/>
  }
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
