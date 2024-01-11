import React from "react";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";

function Profile() {
  return (
    <>
      <Header />
      <h1 className="text-center font-overpass font-bold text-4xl my-7 ">
        PROFILE
      </h1>
      <div className="max-w-lg mx-auto my-10 bg-zinc-100 rounded-lg shadow-md p-5">
        <img
          class="w-60 h-60 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        ></img>
        <h2 class="text-center font-overpass text-2xl font-bold mt-4 tracking-widest">
          AJEYA AVIRAL
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
          <Button name="LOGOUT" location="/login" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
