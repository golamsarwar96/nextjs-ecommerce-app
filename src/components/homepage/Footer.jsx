import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="footer flex justify-between text-neutral-content p-10">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-white font-primary font-bold text-xl ">
            Soft.IO
          </h1>
        </div>
        <div>
          <h1 className="text-white font-primary font-bold text-xl ">
            Social Links
          </h1>
          <div className="text-xl flex">
            <FontAwesomeIcon
              className="w-10 h-10 text-white"
              icon={faSquareXTwitter}
            />
            <FontAwesomeIcon
              className="w-10 h-10 text-white"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="w-10 h-10 text-white"
              icon={faSquareFacebook}
            />
          </div>
        </div>
      </footer>
      <div className="text-center text-white/70">
        <hr className="text-white/80" />
        <p className="p-4">Copyright © 2025 - All right reserved by Soft.IO</p>
      </div>
    </div>
  );
};

export default Footer;
