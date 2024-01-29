import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig";
initializeApp(firebaseConfig);
const db = getFirestore();
const SignInSignUpModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photoUrl, setphotoUrl] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const displayName = `${firstName} ${lastName}`;
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        lastName: lastName,
        phone: phoneNumber,
        email: email,
        photoUrl: photoUrl,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential.user); // Handle the signed-in user
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
      <div className="flex flex-col bg-white md:w-1/2 rounded-xl border-2 border-black justify-center items-center px-10 py-10">
        <div className=" flex flex-row w-full">
          <div className="flex w-full items-center">
            <div
              style={{
                backgroundImage: `url(${
                  photoUrl
                    ? photoUrl
                    : "https://firebasestorage.googleapis.com/v0/b/gbbfull-2f55c.appspot.com/o/c2nlj_dayf5_rm0kz_Artboard%201.jpg?alt=media&token=cfbf9939-f056-459b-a8d3-fae83d6c1e6f"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" h-[250px] w-[200px] md:h-[300px] md:w-[300px] mt-10 -ml-5 md:ml-0 md:mt-4 m-auto relative group rounded-2xl"
            ></div>
          </div>

          <div className="bg-white py-8 rounded-lg w-full max-w-md relative ml-2">
            <button
              onClick={onClose}
              className="absolute right-0 -top-5 text-black text-2xl"
            >
              <FaTimes />
            </button>
            <form
              className="space-y-6"
              onSubmit={isSignUp ? handleSignUp : handleSignIn}
            >
              {isSignUp ? (
                // Sign-up form structure
                <>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-1/2 px-4 py-2 border-2 border-black rounded-2xl"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Surname"
                      className="w-1/2 px-4 py-2 border-2 border-black rounded-2xl"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 border-2 border-black rounded-2xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-1/2 px-4 py-2 border-2 border-black rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-1/2 px-4 py-2 border-2 border-black rounded-xl"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-overpass mb-1 text-center">
                      Upload Profile Photo
                    </h5>
                    <input
                      type="url"
                      placeholder="profile photo url"
                      pattern="https://.*"
                      className="w-full px-4 py-1 border-2 border-black rounded-xl"
                      value={photoUrl}
                      onChange={(e) => setphotoUrl(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                // Sign-in form structure
                <>
                  <div className="flex flex-col gap-2 justify-center mx-2 md:mx-10">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-0 md:px-2 py-2 border-2 border-black rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border-2 border-black rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="flex flex-col justify-start">
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:underline"
                      >
                        Forgotten password?
                      </a>
                    </div>
                  </div>
                </>
              )}
              <div className="flex justify-center items-center h-full font-overpass">
                <button
                  type="submit"
                  className="w-auto bg-black text-white px-5 md:px-12 py-2 rounded-xl"
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
                className="w-full bg-white text-black px-6 py-2 font-bold rounded-xl border-2 border-black"
              >
                {isSignUp ? "SIGN IN" : "CREATE NEW ACCOUNT"}
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center align-top text-center -mb-8 text-gray-600 text-xs md:text-sm">
          © 2023 Greenbluebrown Apparels Pvt. Ltd
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpModal;
