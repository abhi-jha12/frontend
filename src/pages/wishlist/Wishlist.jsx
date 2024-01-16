import React, { useState, useEffect } from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ProductCard from '../../components/cards/ProductCard';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

function Wishlist()  {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const productsCollection = collection(db, "Products");
      const snapshot = await getDocs(productsCollection);
      const fetchedItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductsData(fetchedItems);
    };

    fetchproducts();
  }, []);
  
  return (
    <>
    <Header />
    <h1 className="text-center font-bold font-overpass text-4xl my-7 ">WISHLIST ITEMS</h1>
    <div className='flex flex-wrap md:flex-row relative gap-4 justify-center'>
    {productsData.map((product) => (
        <ProductCard
          pid={product.id}
          btn_name="MOVE TO CART"
          img={product.img}
          price={product.price}
        />
      ))}
      </div>
    
    <Footer />

    </>
  )
}

export default Wishlist
