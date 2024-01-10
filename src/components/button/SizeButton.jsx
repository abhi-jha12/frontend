import React, { useContext } from "react";
import { PriceContext } from "../../PriceContext";

function SizeButton(props) {
  const {selectedSize, handleSizeChange} = useContext(PriceContext);

  const handleSelectChange = (event) => {
    const newSize = event.target.value;
    if (props.onSelectChange) {
      props.onSelectChange(newSize);
    }
    handleSizeChange(newSize); // Update the selected size and prices
  };
  const btn_text = props.name;

  return (
    <button className="justify-center font-overpass text-white text-xl font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-2 rounded-lg max-md:mt-10 max-md:px-5">
      {btn_text}

      <select
        className="ml-5 py-1 px-1 bg-black border-none text-lg"
        onChange={handleSelectChange}
        value={selectedSize}
      >
        <option value="SMALL">SMALL</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LARGE">LARGE</option>
      </select>
    </button>
  );
}

export default SizeButton;
