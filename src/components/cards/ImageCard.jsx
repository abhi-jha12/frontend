import React from "react";
import AddButton from "../button/AddButton";
import { Link } from "react-router-dom";

function ImageCard({ pid, btn_name }) {
  const fetchedUrl = "https://picsum.photos/seed/picsum/400/300";
  return (
    <div className="flex flex-col justify-between">
      <Link to='/product1'>
      <div
        style={{ "--image-url": `url(${fetchedUrl})` }}
        className=" bg-[image:var(--image-url)] max-w-[400px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl"
      ></div>
      </Link>
      
      <div className="flex flex-col font-overpass m-auto justify-center">
        <AddButton
          name={btn_name ?? "Empty button"}
          textSize="sm"
          bid={pid ?? 1}
        />
      </div>
    </div>
  );
}

export default ImageCard;
