import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";

const router = createBrowserRouter([
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
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

function App({}) {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
