import React, {useState, useEffect} from "react";
import AddButton from "../button/AddButton";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";

initializeApp(firebaseConfig);
const db = getFirestore();

function ImageCard({ pid, btn_name }) {
  const [fetchedUrl, setFetchedUrl] = useState("");

  useEffect(() => {
    const fetchproducturl = async () => {
      const urlCollection = collection(db, "topsearch");
      const snapshot = await getDocs(urlCollection);
      const firstDoc = snapshot.docs[0];
      const url = firstDoc.data().url;
      setFetchedUrl(url);
    };

    fetchproducturl();
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <Link to="/product1">
        <div
          style={{ "--image-url": `url(${fetchedUrl})` }}
          className=" bg-[image:var(--image-url)] max-w-[400px] h-[300px] w-full m-auto py-16 px-4 relative group rounded-2xl"
        ></div>
      </Link>

      <div className="flex flex-col font-overpass m-auto justify-center">
        <AddButton
          name={btn_name ?? "Empty button"}
          textSize="sm"
          bid={pid ?? 1}
        />
      </div>
    </div>
  );
}

export default ImageCard;
