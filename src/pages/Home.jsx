import React from "react";
import Header from "../components/nav/Header";
import ImageCarousel from "../components/hero/ImageCarousel";
import Button from "../components/button/Button";
import Poster from "../components/hero/Poster";
import ImageCard from "../components/cards/ImageCard";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <ImageCarousel />
      <div className="container mx-auto flex items-center justify-center flex-1 text-black text-center text-xl self-center max-w-[1061px] mt-15 md:shrink  max-md:mt-5">
        <h3>
          &quot; Discovering your perfect fit is now easier than ever. Say
          goodbye to the hassle of measuring tapes! Simply click below to unlock
          a seamless and personalized sizing experience.&quot;
        </h3>
      </div>
      <div className="flex items-center mx-auto justify-center">
        <Button name=" Get Your Size" />
      </div>
      <div className="flex flex-col gap-20">
        <Poster />
        <Poster />
      </div>
      <div className="container mx-auto flex items-center justify-center flex-1 text-black text-center text-4xl font-bold self-center max-w-[1061px] mt-20 md:shrink  max-md:mt-5">
        <h1>T O P S E A R C H </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 space-y-4 ">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
