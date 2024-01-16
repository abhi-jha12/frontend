import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';
import backicon from '../../assets/back_icon.png';
import fronticon from '../../assets/front_icon.png';
import { RxDotFilled } from 'react-icons/rx';

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

function ImageCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const docRef = doc(db, 'carousel','yS0CL2ETl5Qvt3BINsHe');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const imageUrls = docSnap.data().carimg; 
          const slidesData = imageUrls.map(url => ({ url }));
          setSlides(slidesData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching images: ', error);
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
    <div className="max-w-[1300px] h-[580px] w-full m-auto py-16 px-4 relative group">
      {slides.length > 0 && (
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
      )}
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer">
        <img src={backicon} onClick={prevSlide} alt="Previous" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer">
        <img src={fronticon} onClick={nextSlide} alt="Next" />
      </div>
      <div className="flex top-4 justify-center -mt-10">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
