import React from "react";
import Button from "../../components/button/Button";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";

function Shop() {
  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl my-7 ">ALL PRODUCTS</h1>
      <div className="flex flex-col gap-5">
      <div className=" bg-zinc-300 max-w-[1260px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl">
        <div className="flex justify-end  mt-10  py-20 rounded-lg max-md:mt-10 max-md:pr-5">
          <Button name="Shop Now" location="/product" />
        </div>
      </div>
      <div className=" bg-zinc-300 max-w-[1260px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl">
        <div className="flex justify-end  mt-10  py-20 rounded-lg max-md:mt-10 max-md:pr-5">
          <Button name="Shop Now" location="/product" />
        </div>
      </div>
      <div className=" bg-zinc-300 max-w-[1260px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl">
        <div className="flex justify-end  mt-10  py-20 rounded-lg max-md:mt-10 max-md:pr-5">
          <Button name="Shop Now" location="/product" />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
