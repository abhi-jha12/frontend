import React, { useContext } from "react";
import AddButton from "../button/AddButton";
import { PriceContext } from "../../PriceContext";

function ProductCard({ pid }) {
  const { selectedSize, prices } = useContext(PriceContext);
  const selectedPrice = prices[selectedSize];
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className=" bg-zinc-300 max-w-[220px] h-[250px] w-full m-auto py-16 px-4 relative group rounded-2xl"></div>
        <div className="flex flex-col font-overpass m-auto justify-center">
          <h3 className="text-center font-bold mt-6 -mb-10  text-lg ">
            &#8377;{[selectedPrice ?? 9999]}
          </h3>

          <AddButton name="MOVE TO CART" textSize="sm" bid={pid ?? 1} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
