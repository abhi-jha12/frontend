import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import SizeButton from "../../components/button/SizeButton";
import AddButton from "../../components/button/AddButton";
import Button from "../../components/button/Button";

import { PriceContext } from "../../PriceContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import Loader from "../../components/loader/Loader";

initializeApp(firebaseConfig);
const db = getFirestore();

function Product1() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { selectedSize, prices } = useContext(PriceContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "Products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <Loader />;
  }

  const selectedPrice = product.price ?? prices[selectedSize];
  const discountPrice = selectedPrice * 0.2;
  const rewardPoints = selectedPrice * 0.15;
  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap relative group justify-around">
        <div className="flex flex-col px-4">
          <div
            style={{
              backgroundImage: `url(${product.bigimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[400px] w-[300px] md:h-[500px] md:w-[400px] m-auto lg:ml-10 mt-8 py-16 px-4 relative group rounded-2xl"
          />
          <div className="ml-10">
            <SizeButton name="SIZE" />
          </div>
          <div className="justify-center text-black text-3xl font-extrabold ml-10 -mt-5 tracking-widest">
            &#8377;{[selectedPrice]}
            <br />
            <div className="text-start text-gray-500 text-xs py-2  mt-1 tracking-tighter">
              Get reward of {rewardPoints} points on this purchase
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-1">
          <div className="flex flex-row flex-wrap relative group">
            <div
              style={{
                backgroundImage: `url(${product.miniimg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" h-[300px] w-[280px] md:h-[300px] md:w-[300px] m-auto lg:ml-5 mt-8 py-16 px-3 relative group rounded-2xl"
            />
            <div
              style={{
                backgroundImage: `url(${product.miniimg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" h-[300px] w-[280px] md:h-[300px] md:w-[300px] lg:ml-5 mt-8 m-auto py-16 px-3 relative group rounded-2xl"
            />
          </div>

          <div className="text-start text-black font-regular text-lg py-2 px-3 mt-1 tracking-wider">
            Item Description: <br />
            This is a demo product available at a price of {selectedPrice} with
            a discount of {discountPrice}.
          </div>
          <div className="flex md:flex-row flex-col flex-wrap relative group justify-center md:gap-1">
            <AddButton name="ADD TO CART" textSize="lg" bid={product.id} />
            <Button name="TRY IT VIRTUALLY" location="/error" textSize="lg" />
            <Button name="MOVE TO WISHLIST" location="/error" textSize="lg" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product1;
