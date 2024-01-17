import React from "react";
import Logo from "../../assets/logologin.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center">
      <img src={Logo} alt="Loading..." className="animate-pulse w-200 md:h-100 px-5 md:px-0" />
    </div>
  );
};
export default Loader;
