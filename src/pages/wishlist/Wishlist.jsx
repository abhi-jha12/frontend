import React from 'react'
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ProductCard from '../../components/cards/ProductCard';

function Wishlist()  {
  return (
    <>
    <Header />
    <h1 className="text-center text-4xl my-7 ">Wishlist Items</h1>
    <div className='flex flex-wrap md:flex-row relative gap-4 justify-center'>
    <ProductCard pid='1' />
    <ProductCard pid='2' />
    <ProductCard pid='3' />
    <ProductCard pid='3' />
    <ProductCard pid='4' />
    <ProductCard pid='5' />
    <ProductCard pid='6' />
    <ProductCard pid='7' />
    <ProductCard pid='8' />
    <ProductCard pid='9' />
    <ProductCard pid='10' />
    <ProductCard pid='11' />
    </div>
    
    <Footer />

    </>
  )
}

export default Wishlist