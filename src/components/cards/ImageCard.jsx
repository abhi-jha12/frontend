import React from "react";
import AddButton2 from "../button/AddButton2";
import { Link } from "react-router-dom";

function ImageCard({ pid, btn_name, img }) {
  return (
    <div className="flex flex-col justify-between">
      <Link to={`/topsearch/${pid}`}>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className=" bg-[image:var(--image-url)] max-w-[300px] h-[300px] w-full m-auto py-5 px-2 relative group rounded-2xl hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-150"
        ></div>
      </Link>

      <div className="flex flex-col font-overpass m-auto justify-center">
        <AddButton2
          name={btn_name ?? "Empty button"}
          textSize="sm"
          bid={pid ?? 1}
        />
      </div>
    </div>
  );
}

export default ImageCard;
