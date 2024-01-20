import React, { useState, useEffect } from "react";
import Header from "../components/nav/Header";
import ImageCarousel from "../components/hero/ImageCarousel";
import Button from "../components/button/Button";
import Poster from "../components/hero/Poster";
import ImageCard from "../components/cards/ImageCard";
import Footer from "../components/footer/Footer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import SignInSignUpModal from "../components/utils/SignInSignUpModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";

initializeApp(firebaseConfig);
const db = getFirestore();

function Home() {
  const [postersData, setPostersData] = useState([]);
  const [cardsData, setcardsData] = useState([]);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchposters = async () => {
      const postersCollection = collection(db, "poster");
      const snapshot = await getDocs(postersCollection);
      const fetchedItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostersData(fetchedItems);
    };

    fetchposters();
  }, []);

  useEffect(() => {
    const fetchcards = async () => {
      const cardsCollection = collection(db, "topsearch");
      const snapshot = await getDocs(cardsCollection);
      const fetchedcards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setcardsData(fetchedcards);
    };

    fetchcards();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth State Changed: ", user);
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
        setShowModal(true);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <ImageCarousel />
      <div className="container mx-auto flex items-center justify-center  text-black text-center text-xl self-center max-w-[1061px] mt-15 md:shrink  max-md:mt-5">
        <h3 className="font-overpass">
          &quot; Discovering your perfect fit is now easier than ever. Say
          goodbye to the hassle of measuring tapes! Simply click below to unlock
          a seamless and personalized sizing experience.&quot;
        </h3>
      </div>
      <div className="flex items-center mx-auto justify-center">
        <Button name=" Get Your Size" textSize="text-2xl" />
      </div>
      <div className="flex flex-col gap-20 mx-5">
        {postersData.map((product) => (
          <Poster
            key={product.id}
            btnname={product.btnname}
            posterimg={product.posterimg}
            redirect={product.redirect}
          />
        ))}
      </div>
      <div className="container mx-auto flex items-center justify-center flex-1 text-black text-center text-4xl font-bold self-center max-w-[1061px] mt-20 md:shrink  max-md:mt-5">
        <h1 className="text-center font-bold font-overpass text-4xl my-7 tracking-widest ">
          TOP SEARCHES
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-row relative justify-around mx-12">
        {cardsData.map((product) => (
          <ImageCard
            key={product.id}
            btn_name="ADD TO CART"
            pid={product.id}
            img={product.img}
          />
        ))}
      </div>
      <Footer />
      {!isUserAuthenticated && showModal && (
        <SignInSignUpModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Home;
