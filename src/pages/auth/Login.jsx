import React, { useState } from "react";
import logo from "../../assets/logologin.png";
import Footer from "../../components/footer/Footer";
import LanguageDropdown from "../../components/utils/LanguageDropdown";
import SignInSignUpModal from "../../components/utils/SignInSignUpModal";
import ActionButton from "../../components/button/ActionButton";

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
      <div className="flex  justify-center space-x-4 my-4">
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
