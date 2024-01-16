import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
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
      navigate('/login');
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
      navigate('/');
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
      <div className="flex bg-white rounded-xl border-2 border-black justify-center items-center">
        <div className="flex ml-4 w-1/2 items-center">
          <div
            style={{ "--image-url": `url(${photoUrl})` }}
            className=" bg-[image:var(--image-url)] max-w-[500px] h-[300px] px-10 w-full  relative group rounded-2xl"
          ></div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative ml-2">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-black text-2xl"
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
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex space-x-2">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-full"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                <h5 className="text-sm font-overpass mb-1 text-center">Upload Profile Photo</h5>
                <input
                  type="url"
                  placeholder="profile photo url"
                  pattern="https://.*"
                  className="w-full px-4 py-1 border-2 border-black rounded-full"
                  value={photoUrl}
                  onChange={(e) => setphotoUrl(e.target.value)}
                />
                </div>
                
              </>
            ) : (
              // Sign-in form structure
              <>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-black rounded-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
