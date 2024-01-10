import React from "react";
import { useNavigate } from "react-router-dom";
function Button(props) {
  const navigate = useNavigate();
  const btn_navigate = props.location;
  
  const btn_text = props.name;
  return (
    <button
      className="justify-center text-white text-xl font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg max-md:mt-10 max-md:px-5"
      onClick={() => navigate(btn_navigate)}
    >
      {btn_text}
    </button>
  );
}

export default Button;
