import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/error/ErrorPage";
import store from "./redux/store";

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
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

function App({}) {
  return (
    <>
      <Provider store={store}>
        {" "}
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
