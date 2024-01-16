import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import wishlist_icon from "../../assets/wishlist_icon.png";
import user_icon from "../../assets/profile_icon.png";
import cart_icon from "../../assets/cart_icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1025);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleHamburgerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-stretch justify-between gap-10 mt-5 mx-10 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <img
        loading="lazy"
        src={logo}
        className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
      />
      {isMobileView ? (
        <>
          <button
            className="navbar-burger flex items-center text-black p-3"
            onClick={handleHamburgerClick}
            aria-expanded={isDropdownOpen}
          >
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="flex flex-row bg-black text-white justify-center lg:justify-center flex-wrap ">
              <Link to="/" className="text-xs p-2">
                HOME
              </Link>
              <Link to="/shop" className="text-xs p-2">
                SHOP
              </Link>
              <Link to="/error" className="text-xs p-2">
                ABOUT
              </Link>
              <Link to="/wishlist" className="text-xs p-2">
                WISHLIST
              </Link>
              <Link to="/cart" className="text-xs p-2">
                CART
              </Link>
              <Link to="/profile" className="text-xs p-2">
                PROFILE
              </Link>
            </div>
          )}
        </>
      ) : (
        // Original menu for non-mobile view

        <div className="self-center flex justify-between gap-16 my-2 items-start max-md:max-w-full max-md:flex-wrap">
          <span className="bg-neutral-950 flex items-stretch justify-between gap-12 mx-20 px-12 py-1 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <Link to="/" className="text-white text-sm">
              H O M E
            </Link>

            <Link to="/shop" className="text-white text-sm mx-5">
              S H O P
            </Link>

            <Link to="/error" className="text-white text-sm mx-5">
              A B O U T
            </Link>

            <Link to="/error" className="text-white text-sm mx-5">
              B L O G
            </Link>
          </span>
          <span className="bg-neutral-950 self-stretch flex items-center justify-between gap-10 pl-6 mr-6 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="justify-center text-white text-sm my-auto mr-1">
              S E A R C H{" "}
            </div>

            <div className="self-stretch flex items-stretch justify-between gap-8 mx-3">
              <Link to="/cart">
                <img
                  loading="lazy"
                  src={cart_icon}
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-1"
                />
                {cartItems.length >= 0 && (
                  <div className="text-white -mt-6 ml-6 text-xs">
                    {cartItems.length ?? 0}
                  </div>
                )}
              </Link>
              <Link to="/wishlist">
                <img
                  loading="lazy"
                  src={wishlist_icon}
                  className="aspect-square object-contain object-center w-4 stroke-[1.5px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto mt-2"
                />
              </Link>
              <Link to="/profile">
                <img
                  loading="lazy"
                  src={user_icon}
                  className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto mt-2"
                />
              </Link>
            </div>
          </span>
        </div>
      )}
    </div>
  );
}
export default Header;
