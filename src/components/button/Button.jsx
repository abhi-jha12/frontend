import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();
  const btn_navigate = props.location;
  const btn_text = props.name;

  return (
    <button
      className={`font-overpass justify-center text-white hover:text-black font-bold bg-neutral-950 hover:bg-white self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg border-2 border-black whitespace-pre ${props.textSize || 'text-lg'}`}
      onClick={() => navigate(btn_navigate)}
    >
      {btn_text}
    </button>
  );
}

export default Button;
