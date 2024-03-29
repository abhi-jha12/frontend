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

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

function Home() {
  const [postersData, setPostersData] = useState([]);
  const [cardsData, setcardsData] = useState([]);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const fetchPosters = async () => {
      const postersCollection = collection(db, "poster");
      const snapshot = await getDocs(postersCollection);
      const fetchedItems = snapshot.docs.map((doc) => {
        // Adjust for mobile or desktop view
        const data = doc.data();
        const posterImage = isMobile ? data.mobileposterimg : data.posterimg;
        return {
          id: doc.id,
          ...data,
          posterimg: posterImage, // Use the adjusted image URL
        };
      });
      setPostersData(fetchedItems);
    };

    fetchPosters();
  }, [isMobile]); // Re-fetch when isMobile changes

  useEffect(() => {
    const fetchCards = async () => {
      const cardsCollection = collection(db, "topsearch");
      const snapshot = await getDocs(cardsCollection);
      const fetchedCards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setcardsData(fetchedCards);
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <div className="flex mx-10 md:mx-20 items-center justify-center text-black text-center text-md md:text-xl  tracking-tightest md:tracking-widest ">
        <h3 className="font-overpass">
          "Discovering your perfect fit is now easier than ever. Say goodbye to the hassle of measuring tapes! Simply click below to unlock a seamless and personalized sizing experience"
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
            posterimg={product.posterimg} // This now dynamically uses mobile or desktop images
            redirect={product.redirect}
          />
        ))}
      </div>
      <div className="container mx-auto flex justify-center flex-1 text-black text-center text-4xl font-bold self-center max-w-[1061px] my-20 md:shrink  max-md:mt-5">
        <h1 className="text-center font-bold font-overpass text-4xl my-7 tracking-widest ">
          TOP SEARCHES
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-row relative justify-around gap-2">
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
