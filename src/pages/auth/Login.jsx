import React, { useState } from "react";
import logo from "../../assets/logologin.png";
import Footer from "../../components/footer/Footer";
import LanguageDropdown from "../../components/utils/LanguageDropdown";
import SignInSignUpModal from "../../components/utils/SignInSignUpModal";
import ActionButton from "../../components/button/ActionButton";
import HeroImage from "../../assets/heroimg.jpg";
import HeroImage2 from "../../assets/heroimg2.png";

function Login() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="bg-white py-4">
        <nav className="container flex items-center justify-between">
          <div className="flex">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <div>
            <LanguageDropdown></LanguageDropdown>
          </div>
        </nav>
      </header>
      <div className="flex md:flex-row justify-around flex-wrap gap-10 mt-5">
        <div className="flex flex-col justify-start gap-2 ">
          <img
            src={HeroImage2}
            alt="HeroImage"
            className="flex max-w-[400px] h-[100px] w-full px-3 md:px-0 m-auto mb-3 border-1 border-black rounded-2xl"
          />
          <div className="text-zinc-600 text-xs md:text-lg mt-6 md:mt-0 md:mb-20 mx-1 text-center">
            Transform your shopping experience into a rewarding odyssey
          </div>
          <div className="text-black text-xl md:text-3xl self-stretch mt-20 md:mt-8 max-md:max-w-full max-md:mt-10 text-center">
            Embrace the revolutionary fusion of fashion and
            <br />
            technology with AR and virtual try-on
          </div>
        </div>

        <img
          src={HeroImage}
          alt="HeroImage"
          className="flex flex-row max-w-[400px] h-[500px] w-full m-auto border-4 border-black  rounded-2xl"
        />
      </div>
      <div className="flex  justify-center space-x-4 my-5 mt-20 ">
        <ActionButton
          text="LOGIN  /  SIGNUP"
          onClick={() => {
            setShowModal(true);
          }}
          variant="primary"
        />
      </div>
      <Footer />
      {showModal && <SignInSignUpModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Login;
