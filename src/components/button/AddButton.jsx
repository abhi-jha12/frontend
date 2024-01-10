import React from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";

function AddButton(props) {
  const dispatch = useDispatch();
  const btn_text = props.name;
  const btn_id = props.bid;

  return (
    <button
      className={`justify-center font-overpass text-white font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg ${props.textSize || 'text-lg'}`}
      onClick={() => dispatch(addtoCart({btn_id}))}
    >
      {btn_text}
    </button>
  );
}

export default AddButton;
