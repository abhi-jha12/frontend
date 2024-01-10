import React, { createContext, useState } from "react";

const PriceContext = createContext();

const PriceProvider = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [prices, setPrices] = useState({
    SMALL: 10,
    MEDIUM: 15,
    LARGE: 20,
  });

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    // Adjust prices based on the selected size
    // For simplicity, let's assume the prices increase by $5 for each size
    setPrices({
      SMALL: 10,
      MEDIUM: 15,
      LARGE: 20,
    });
  };

  return (
    <PriceContext.Provider value={{ selectedSize, prices, handleSizeChange }}>
      {children}
    </PriceContext.Provider>
  );
};

export { PriceContext, PriceProvider };
