import React from "react";
import LogoFooter from "../../assets/logofoot.png";
import MailLogo from "../../assets/mail_logo.png";
import LocationLogo from "../../assets/location_logo.png";
import PhoneLogo from "../../assets/phone_logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <div className=" bg-black text-white max-w-[1400px] h-[460px] w-full m-auto mt-10 py-6 px-4 relative group ">
      <div className="flex flex-col justify-center">
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex h-13 w-50 justify-center">
          <img src={LogoFooter} alt="logo" />
        </div>
        <div className="flex items-stretch justify-between gap-4 mt-7 mx-10  max-md:flex-wrap">
          <span className="flex items-stretch gap-4 mt-2 self-start">
            <img loading="lazy" src={MailLogo} />
            <div className="text-white text-sm self-center my-auto">
              admin@greenbluebrown.in
            </div>
          </span>
          <span className="flex items-stretch justify-between gap-4">
            <img loading="lazy" src={LocationLogo} />
            <div className="text-white text-sm self-center grow shrink basis-auto my-auto">
              Plot 404, New Paharpur, Anisabad, Patna, Bihar, INDIA
            </div>
          </span>
          <span className="flex items-stretch gap-4 self-start">
            <img loading="lazy" src={PhoneLogo} />
            <div className="text-white text-sm my-auto">+91- 6204176511</div>
          </span>
        </div>
        <p className="text-gray-400 my-4 text-center">Follow us on:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="text-center text-gray-500 text-sm py-4  mt-1">
          © 2023 Greenbluebrown Apparels Pvt. Ltd
        </div>
      </div>
    </div>
  );
}

export default Footer;
