import React, { createContext, useState,useEffect } from "react";

const PriceContext = createContext();

const PriceProvider = ({ children }) => {
  const defaultPrices = {
    SMALL: 10,
    MEDIUM: 15,
    LARGE: 20,
  };
  const [selectedSize, setSelectedSize] = useState("");
  const [prices, setPrices] = useState(defaultPrices);
  const [defaultPrice, setDefaultPrice] = useState("");
  useEffect(() => {
    if (selectedSize && defaultPrices[selectedSize]) {
      setDefaultPrice(defaultPrices[selectedSize]);
    }
  }, [selectedSize, defaultPrices]);
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    const adjustedPrices = {
      SMALL: defaultPrices.SMALL + 5,
      MEDIUM: defaultPrices.MEDIUM + 5,
      LARGE: defaultPrices.LARGE + 5,
    };
    setPrices(adjustedPrices);
  };

  return (
    <PriceContext.Provider value={{ selectedSize, prices, defaultPrice, handleSizeChange }}>
      {children}
    </PriceContext.Provider>
  );
};

export { PriceContext, PriceProvider };
