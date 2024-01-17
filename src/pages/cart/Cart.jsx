import React, { useState, useEffect } from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removefromCart } from "../../redux/cartSlice";
import ProductCard from "../../components/cards/ProductCard";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // In your Cart component
useEffect(() => {
  const fetchProducts = async () => {
    try {
      console.log("Cart Items:", cartItems);
      const fetchedProducts = [];
      for (const item of cartItems) {
        if (item && item.btn_id) { // Assuming pid is the product ID
          const productRef = doc(db, "Products", item.btn_id);
          const productSnap = await getDoc(productRef);
          if (productSnap.exists()) {
            fetchedProducts.push({ id: item.btn_id, ...productSnap.data() });
          }
        } else {
          console.error("Invalid item or missing PID:", item);
        }
      }
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, [cartItems]);

  return (
    <>
      <Header />
      <h1 className="text-center font-bold font-overpass text-4xl my-7 ">
        Cart Items
      </h1>
      {products.map((product) => {
        return (
          <>
            <div className="flex flex-row justify-around">
              <ProductCard
                pid={product.id}
                img={product.img}
                price={product.price}
              />
              <button
                className="justify-center font-overpass text-white font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg text-lg"
                onClick={() => dispatch(removefromCart({ btn_id: product.id } ))}
              >
                REMOVE
              </button>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default Cart;
