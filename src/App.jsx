import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Shop from "./pages/shop/Shop";
import Product1 from "./pages/product/Product1";
import Product2 from "./pages/product/Product2";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/error/ErrorPage";
import store from "./redux/store";
import Wishlist from "./pages/wishlist/Wishlist";
import Profile from "./pages/profile/Profile";

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
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:productId",
    element: <Product1 />,
  },
  {
    path: "/topsearch/:productId",
    element: <Product2 />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
