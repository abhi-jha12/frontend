import React from 'react';

const ActionButton = ({ text, onClick, variant }) => {
  const baseStyle = "mx-5 px-4 py-2 rounded-lg border-2 border-black text-white hover:text-black font-overpass focus:outline-none";
  const styles = {
    primary: `bg-black hover:bg-white ${baseStyle}`,
    secondary: `bg-black hover:bg-white ${baseStyle}`
  };
  
  return (
    <button className={styles[variant]} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;