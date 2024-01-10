import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import logo from "../../assets/logo.png";
import wishlist_icon from "../../assets/wishlist_icon.png";
import user_icon from "../../assets/profile_icon.png";
import cart_icon from "../../assets/cart_icon.png";
import { useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1025);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-stretch justify-between gap-10 mt-8 mx-10 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
      <img
        loading="lazy"
        src={logo}
        className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
      />
      {isMobileView ? (
        // Hamburger button and menu for mobile view
        <div className="mobile-menu">
          <Menu>
            <MenuButton className="hamburger" onClick={handleMenuToggle}>
              <span>☰</span>
            </MenuButton>
            {isMenuOpen && (
              <MenuList className="grid grid-cols-4 items-center mt-5 bg-black ">
                <MenuItem onSelect={() => setIsMenuOpen(!isMenuOpen)}>
                  <div className="text-white text-xsm mx-1">HOME</div>
                </MenuItem>
                <MenuItem onSelect={() => setIsMenuOpen(false)}>
                  <div className="text-white text-xsm mx-1">SHOP</div>
                </MenuItem>
                <MenuItem onSelect={() => setIsMenuOpen(false)}>
                  <div className="text-white text-xsm mx-1">ABOUT</div>
                </MenuItem>
                <MenuItem onSelect={() => setIsMenuOpen(false)}>
                  <div className="text-white text-xsm mx-1">BLOG</div>
                </MenuItem>
              </MenuList>
            )}
          </Menu>
        </div>
      ) : (
        // Original menu for non-mobile view

        <div className="self-center flex justify-between gap-16 my-2 items-start max-md:max-w-full max-md:flex-wrap">
          <span className="bg-neutral-950 flex items-stretch justify-between gap-12 mx-20 px-12 py-1 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <Menu>
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="text-white text-sm">H O M E</div>
              </MenuButton>
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="text-white text-sm mx-5">S H O P</div>
              </MenuButton>
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="text-white text-sm mx-5">A B O U T</div>
              </MenuButton>
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="text-white text-sm mx-5">B L O G</div>
              </MenuButton>
            </Menu>
          </span>
          <span className="bg-neutral-950 self-stretch flex items-center justify-between gap-10 pl-6 mr-6 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="justify-center text-white text-sm my-auto mr-1">
              S E A R C H{" "}
            </div>

            <div className="self-stretch flex items-stretch justify-between gap-8 mx-3">
              <img
                loading="lazy"
                src={cart_icon}
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              {cartItems.length > 0 && (
                <div className="text-white -ml-8 text-xs">
                  {cartItems.length}
                </div>
              )}
              <img
                loading="lazy"
                src={wishlist_icon}
                className="aspect-square object-contain object-center w-4 stroke-[1.5px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src={user_icon}
                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </span>
        </div>
      )}
    </div>
  );
}
export default Header;
