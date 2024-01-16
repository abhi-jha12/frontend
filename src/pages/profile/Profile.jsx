import React,{useState,useEffect} from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userData, setUserData] = useState({});
  const db = getFirestore();
  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };
  return (
    <>
      <Header />
      <h1 className="text-center font-overpass font-bold text-4xl my-7 ">
        PROFILE
      </h1>
      <div className="max-w-lg mx-auto my-10 bg-zinc-100 rounded-lg shadow-md p-5">
        <img
          class="w-60 h-60 rounded-full mx-auto"
          src={userData.photoUrl}
          alt="Profile picture"
        ></img>
        <h2 class="text-center font-overpass text-2xl font-bold mt-4 tracking-widest">
          {userData.displayName || "User Name"}
        </h2>
        <div class="flex flex-col justify-center mt-5">
          <a
            href="#"
            class="bg-zinc-300 self-stretch font-bold font-overpass flex justify-between gap-5 mt-8 pl-6 pr-5 py-2 rounded-md items-start"
          >
            ORDERS
          </a>
          <a
            href="#"
            class="bg-zinc-300 self-stretch font-bold font-overpass flex justify-between gap-5 mt-3 pl-6 pr-5 py-2 rounded-md items-start"
          >
            ADDRESS
          </a>
          <a
            href="#"
            class="bg-zinc-300 self-stretch font-bold font-overpass flex justify-between gap-5 mt-3 pl-6 pr-5 py-2 rounded-md items-start"
          >
            PAYMENTS
          </a>
          <a
            href="#"
            class="bg-zinc-300 self-stretch font-bold font-overpass flex justify-between gap-5 mt-3 pl-6 pr-5 py-2 rounded-md items-start"
          >
            REWARDS
          </a>
          <a
            href="#"
            class="bg-zinc-300 self-stretch font-bold font-overpass flex justify-between gap-5 mt-3 pl-6 pr-5 py-2 rounded-md items-start"
          >
            SETTINGS
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className="font-overpass justify-center text-white font-bold bg-neutral-950 self-center items-stretch mt-11 mb-9 px-11 py-3 rounded-lg"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
