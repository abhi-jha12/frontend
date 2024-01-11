import React from 'react'
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ProductCard from '../../components/cards/ProductCard';

function Wishlist()  {
  return (
    <>
    <Header />
    <h1 className="text-center font-bold font-overpass text-4xl my-7 ">WISHLIST ITEMS</h1>
    <div className='flex flex-wrap md:flex-row relative gap-4 justify-center'>
    <ProductCard pid='1' btn_name="MOVE TO CART" />
    <ProductCard pid='2' btn_name="MOVE TO CART" />
    <ProductCard pid='3' btn_name="MOVE TO CART" />
    <ProductCard pid='3' btn_name="MOVE TO CART" />
    <ProductCard pid='4' btn_name="MOVE TO CART" />
    <ProductCard pid='5' btn_name="MOVE TO CART" />
    <ProductCard pid='6' btn_name="MOVE TO CART" />
    <ProductCard pid='7' btn_name="MOVE TO CART" />
    <ProductCard pid='8' btn_name="MOVE TO CART" />
    <ProductCard pid='9' btn_name="MOVE TO CART" />
    <ProductCard pid='10' btn_name="MOVE TO CART" />
    <ProductCard pid='11' btn_name="MOVE TO CART" />
    </div>
    
    <Footer />

    </>
  )
}

export default Wishlist