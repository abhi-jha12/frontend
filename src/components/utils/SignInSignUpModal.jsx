// SignInSignUpModal.jsx
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInSignUpModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const fetchedUrl = "https://picsum.photos/400";
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
      <div className="flex bg-white rounded-xl border-2 border-black justify-center items-center">
        <div className="flex ml-4 w-1/2 items-center">
          <Link to="/product1">
            <div
              style={{ "--image-url": `url(${fetchedUrl})` }}
              className=" bg-[image:var(--image-url)] max-w-[300px] h-[300px] px-10 relative group rounded-2xl"
            ></div>
          </Link>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative ml-2">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-black text-2xl"
          >
            <FaTimes />
          </button>
          <form className="space-y-6">
            {isSignUp ? (
              // Sign-up form structure
              <>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-1/3 px-4 py-2 border-2 border-black rounded-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-2/3 px-4 py-2 border-2 border-black rounded-full"
                  />
                </div>
              </>
            ) : (
              // Sign-in form structure
              <>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                />
                <div className="text">
                  <a href="#" className="text-xs text-gray-600 hover:underline">
                    Forgotten password?
                  </a>
                </div>
              </>
            )}
            <div className="flex justify-center items-center h-full">
              <button
                type="submit"
                className="w-auto bg-black text-white px-4 py-2 rounded-full"
              >
                {isSignUp ? "SIGN UP" : "LOGIN"}
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              {isSignUp ? "Already have an account?" : "New to the site?"}
            </p>
            <button
              onClick={toggleForm}
              className="w-full bg-white text-black px-2 py-2 font-bold rounded-full border-2 border-black"
            >
              {isSignUp ? "SIGN IN" : "CREATE NEW ACCOUNT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpModal;
