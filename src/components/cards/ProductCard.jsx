import React, { useContext } from "react";
import AddButton from "../button/AddButton";
import { PriceContext } from "../../PriceContext";
import { Link } from "react-router-dom";

function ProductCard({ pid, btn_name, img, price }) {
  const selectedPrice = useContext(PriceContext);
  
  return (
    <>
      <div className="flex flex-col justify-center ">
        <Link to={`/product/${pid}`}>
          <div
            style={{ backgroundImage: `url(${img})` }}
            className=" bg-[image:var(--image-url)] max-w-[220px] h-[250px] w-full m-auto py-16 px-4 relative group rounded-2xl"
          ></div>
        </Link>
        <div className="flex flex-col font-overpass m-auto justify-center">
          <h3 className="text-center font-bold mt-6 -mb-10  text-lg ">
            &#8377;{price ?? selectedPrice ?? 9999}
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
