import React from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removefromCart } from "../../redux/cartSlice";
import ProductCard from "../../components/cards/ProductCard";
import Wishlist from "../wishlist/Wishlist";

function Cart(props) {
  const cartitems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()
  const btn_text = props.name;
  return (
    <>
      <Header />
      <h1 className="text-center font-bold font-overpass text-4xl my-7 ">Cart Items</h1>
      {cartitems.map((item) => {
        return (
          <>
            <p>{item.btn_id}</p>
            <button
              className={`justify-center font-overpass text-white font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg ${
                props.textSize || "text-lg"
              }`}
              onClick={() => dispatch(removefromCart({btn_id:item.btn_id}))}
            >
              {btn_text ?? 'Remove'}
            </button>
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default Cart;
