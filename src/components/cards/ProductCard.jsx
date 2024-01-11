import React, { useContext } from "react";
import AddButton from "../button/AddButton";
import { PriceContext } from "../../PriceContext";
import { Link } from "react-router-dom";

function ProductCard({ pid, btn_name }) {
  const { selectedSize, prices } = useContext(PriceContext);
  const selectedPrice = prices[selectedSize];
  const fetchedUrl = "https://picsum.photos/seed/picsum/220/250";
  return (
    <>
      <div className="flex flex-col justify-center ">
        <Link to="/product1">
          <div
            style={{ "--image-url": `url(${fetchedUrl})` }}
            className=" bg-[image:var(--image-url)] max-w-[220px] h-[250px] w-full m-auto py-16 px-4 relative group rounded-2xl"
          ></div>
        </Link>
        <div className="flex flex-col font-overpass m-auto justify-center">
          <h3 className="text-center font-bold mt-6 -mb-10  text-lg ">
            &#8377;{[selectedPrice ?? 9999]}
          </h3>

          <AddButton
            name={btn_name ?? "Empty button"}
            textSize="sm"
            bid={pid ?? 1}
          />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
