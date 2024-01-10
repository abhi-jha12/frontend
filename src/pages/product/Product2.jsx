import React, { useContext } from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import SizeButton from "../../components/button/SizeButton";
import AddButton from "../../components/button/AddButton";
import Button from "../../components/button/Button"

import { PriceContext } from "../../PriceContext";

function Product2() {
  const { selectedSize, prices } = useContext(PriceContext);
  const selectedPrice = prices[selectedSize];

  const description = [
    " This is a demo product availaible at a price of ",
    selectedPrice,
    " with a discount of ",
    selectedPrice * 0.2,
  ];
  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap relative group justify-around">
        <div className="flex flex-col px-4">
          <div className=" bg-zinc-300 max-w-[400px] h-[500px] w-full lg:ml-10 mt-8 m-auto py-16 px-4 relative group rounded-2xl" />
          <div className="ml-10">
            <SizeButton name="SIZE" />
          </div>
          <div className="justify-center text-black text-3xl font-extrabold ml-10 -mt-5 tracking-widest">
            &#8377;{[selectedPrice]}
            <br />
            <div className="text-start text-gray-500 text-xs py-2  mt-1 tracking-tighter">
              Get reward of {[selectedPrice * 0.15]} points on this purchase
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-1">
          <div className="flex flex-row flex-wrap relative group">
            <div className=" bg-zinc-300 max-w-[250px] h-[300px] w-full lg:ml-5 mt-8 m-auto py-16 px-3 relative group rounded-2xl" />
            <div className=" bg-zinc-300 max-w-[250px] h-[300px] w-full lg:ml-5 mt-8 m-auto py-16 px-3 relative group rounded-2xl" />
          </div>

          <div className="text-start text-black font-regular text-lg py-2 px-3 mt-1 tracking-wider">
            Item Description: <br />
            {[description]}
          </div>
          <div className="flex md:flex-row flex-col flex-wrap relative group justify-center md:gap-1">
            <AddButton name="ADD TO CART" textSize='lg' bid="1" />
            <Button name="TRY IT VIRTUALLY" location="/error" textSize='lg' />
            <Button name="MOVE TO WISHLIST" location="/error" textSize='lg' />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product2;
