import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import backicon from "../../assets/back_icon.png";
import fronticon from "../../assets/front_icon.png";
import { RxDot } from "react-icons/rx";

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

function ImageCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const docRef = doc(db, "carousel", "yS0CL2ETl5Qvt3BINsHe");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const imageUrls = docSnap.data().carimg;
          const slidesData = imageUrls.map((url) => ({ url }));
          setSlides(slidesData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-[400px] h-[500px] md:w-[1300px] md:h-[580px] md:ml-3 md:mx-5 py-20">
      {slides.length > 0 && (
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-[350px] w-[330px] md:h-[450px] md:w-[1300px] m-auto rounded-2xl bg-center bg-cover duration-500"
        ></div>
      )}
      {/* Left Arrow */}

      <img
        src={backicon}
        onClick={prevSlide}
        alt="Previous"
        className=" w-11 h-11 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-transparent text-black cursor-pointer"
      />

      {/* Right Arrow */}

      <img
        src={fronticon}
        onClick={nextSlide}
        alt="Next"
        className="w-11 h-11 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-transparent text-black cursor-pointer"
      />

      <div className="flex top-4 justify-center -mt-10">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-3xl cursor-pointer hover:-translate-y-1 delay-150"
          >
            <RxDot />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
